const processData = require("./process-data");

class StudentStats {
  constructor(data) {
    this.data = processData(data);
  }

  queryProject(name) {
    const project = this.data.projects[name];
    if (!project) {
      throw new Error("Please provide a valid project name.");
    }
    return project;
  }

  queryExpRange(min, max) {
    const project = this.data.experience;
    let avgSatisfaction = 0;

    for (let level in project) {
      if (level >= min && level <= max) {
        avgSatisfaction += project[level].avgSatisfaction;
      } else {
        return undefined;
      }
    }

    return avgSatisfaction / (max - min);
  }

  queryDemographics(cohort) {
    const project = this.data.cohorts[cohort];

    if (!project) {
      throw new Error("Cohort does not exist");
    }

    return project.demographics;
  }
}

module.exports = StudentStats;
