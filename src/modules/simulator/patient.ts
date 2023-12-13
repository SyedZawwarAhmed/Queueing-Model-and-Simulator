export class Patient {
  patient_id: number;
  arrival_time: number;
  burst_time: number;
  priority: number;
  time_left: number;
  is_arrived: boolean;
  is_ready: boolean;
  start_time: number;
  end_time: number;
  completion_time: number;
  turn_around_time: number;
  wait_time: number;
  response_time: number;
  utilization_time: number;
  response_ratio: number;
  start_times: number[];
  end_times: number[];

  constructor(
    patient_id: number,
    arrival_time: number,
    burst_time: number,
    priority: number,
    service_time: number
  ) {
    this.patient_id = patient_id;
    this.arrival_time = arrival_time;
    this.burst_time = burst_time;
    this.priority = priority;
    this.time_left = service_time;
    this.is_arrived = false;
    this.is_ready = false;
    this.start_time = 0;
    this.end_time = 0;
    this.completion_time = 0;
    this.turn_around_time = 0;
    this.wait_time = 0;
    this.response_time = 0;
    this.utilization_time = 0;
    this.response_ratio = 0;
    this.start_times = [];
    this.end_times = [];
  }

  decrement_time_left(): void {
    this.time_left -= 1;
  }

  set_start_time(time_passed: number): void {
    this.start_time = time_passed;
  }

  set_end_time(time_passed: number): void {
    this.end_time = time_passed;
  }

  set_completion_time(time_passed: number): void {
    this.completion_time = time_passed;
  }

  set_turn_around_time(): void {
    this.turn_around_time = this.completion_time - this.arrival_time;
  }

  set_wait_time(): void {
    this.wait_time = this.turn_around_time - this.burst_time;
  }

  set_response_time(time_passed: number): void {
    this.response_time = time_passed - this.arrival_time;
  }

  set_utilization_time(): void {
    this.utilization_time = this.burst_time / this.turn_around_time;
  }

  append_start_times(time_passed: number): void {
    this.start_times.push(time_passed);
  }

  append_end_times(time_passed: number): void {
    this.end_times.push(time_passed);
  }

  set_response_ratio(time_passed: number): void {
    this.response_ratio =
      (time_passed - this.arrival_time + this.burst_time) / this.burst_time;
  }
}

export function check_should_service_proceed(patient_list: Patient[]): boolean {
  for (const patient of patient_list) {
    if (patient.time_left > 0) {
      return true;
    }
  }

  return false;
}

export function sort_patients_according_to_shortest_arrival(
  patient_list: Patient[]
): Patient[] {
  return patient_list.sort((a, b) => a.arrival_time - b.arrival_time);
}

export function sort_patients_according_to_highest_priority(
  patient_list: Patient[]
): Patient[] {
  return patient_list.sort((a, b) => a.priority - b.priority);
}

export function get_patients_of_same_highest_priority(
  patient_list: Patient[],
  maximum_priority: number
): Patient[] {
  const patients_of_same_highest_priority: Patient[] = [];
  for (const patient of patient_list) {
    if (patient.priority === maximum_priority) {
      patients_of_same_highest_priority.push(patient);
    }
  }
  return patients_of_same_highest_priority;
}

export function serve_highest_priority_patient(patients: Patient[]): void {
  let ready_queue: Patient[] = [];
  let time_passed = 0;

  console.log("\nServing Patients according to Highest Priority.");
  let ran_patient: Patient;
  while (check_should_service_proceed(patients)) {
    ready_queue = [];
    for (const patient of patients) {
      if (patient.arrival_time <= time_passed && patient.time_left > 0)
        ready_queue.push(patient);
    }

    if (!ready_queue.length) time_passed += 1;
    else {
      let sorted_ready_queue_according_to_highest_priority =
        sort_patients_according_to_highest_priority(ready_queue);
      let maximum_priority =
        sorted_ready_queue_according_to_highest_priority[0].priority;

      let patients_of_same_highest_priority =
        get_patients_of_same_highest_priority(
          sorted_ready_queue_according_to_highest_priority,
          maximum_priority
        );

      let sorted_ready_queue_according_to_shortest_arrival =
        sort_patients_according_to_shortest_arrival(
          patients_of_same_highest_priority
        );

      let running_queue = [sorted_ready_queue_according_to_shortest_arrival[0]];

      if (!ran_patient || ran_patient != running_queue[0]) {
        running_queue[0].append_start_times(time_passed);
        if (ran_patient) ran_patient.append_end_times(time_passed);
        ran_patient = running_queue[0];
      }
      if (!ran_patient.is_ready) {
        ran_patient.set_response_time(time_passed);
        ran_patient.set_start_time(time_passed);
        ran_patient.is_ready = true;
      }
      time_passed += 1;
      ran_patient.time_left -= 1;
      if (ran_patient.time_left == 0) {
        ran_patient.set_end_time(time_passed);
        ran_patient.set_completion_time(time_passed);
        ran_patient.set_turn_around_time();
        ran_patient.set_wait_time();
        ran_patient.set_utilization_time();
      }
    }
  }
  if (ran_patient.start_times.length > ran_patient.end_times.length) {
    ran_patient.append_end_times(time_passed);
  }

  let total_service_time = 0;
  for (const patient of patients) {
    total_service_time += patient.burst_time;
  }

  const utlization_time = total_service_time / time_passed;

  if (utlization_time < 0 || utlization_time > 1) {
    console.log("Invalid mean, utilization time is out of range.");
    return;
  }

  console.log(`Utilization Time: ${utlization_time}`);
}