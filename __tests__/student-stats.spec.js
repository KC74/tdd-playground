jest.setMock("../src/process-data", require("../__mocks__/process-data.mock"));

const studentStats = require("../src/student-stats");

describe("Instructor satisfaction evaluation of a lesson", () => {
  beforeEach(() => {
    test = {};
    test.cohort = "adp-fall-2017";
    test.projectName = "aloha";
    test.processedData = {
      cohorts: {
        [test.cohort]: {
          demographics: {
            averageAge: 26.2,
            averageExperience: 3.2
          }
        }
      },
      experience: {
        1: {
          sampleSize: 2,
          avgSatisfaction: 2.4
        },
        2: {
          sampleSize: 4,
          avgSatisfaction: 2.4
        },
        3: {
          sampleSize: 0,
          avgSatisfaction: 2.4
        },
        4: {
          sampleSize: 3,
          avgSatisfaction: 2.4
        }
      },
      projects: {
        [test.projectName]: {
          pass: {
            number: 40,
            satisfaction: 100
          },
          fail: {
            number: 10,
            satisfaction: 80
          }
        }
      }
    };
    test.subject = new studentStats(test.processedData);
    test.project = test.subject.queryProject(test.projectName);
  });

  describe("Query a project", () => {
    describe("When a given project name exists", () => {
      it("Should tell me how many students have passed the project.", () => {
        expect(test.project.pass.number).toBe(40);
      });
      it("Should tell me the satisfaction level of those who passed.", () => {
        expect(test.project.pass.satisfaction).toBe(100);
      });
      it("Should tell me how many students have failed the project.", () => {
        expect(test.project.fail.number).toBe(10);
      });
      it("Should tell me the satisfaction level of those who failed.", () => {
        expect(test.project.fail.satisfaction).toBe(80);
      });
    });

    describe("When a given project does not exist", () => {
      it("Should throw an error", () => {
        expect(() => test.subject.queryProject("nope")).toThrow();
      });
    });
  });

  describe("Query experience level", () => {
    describe("Determine average satisfaction for given range of years of experience", () => {
      it("Should return average satisfaction level when the range exists", () => {
        expect(test.subject.queryExpRange(0, 5)).toBe(1.92);
      });

      it("Should return undefined when level does not exist", () => {
        expect(test.subject.queryExpRange(7, 6)).toBe(undefined);
      });
    });
  });

  describe("Query cohort demographics", () => {
    describe("Get the average age and experience level of a given cohort", () => {
      it("Should return average age and experience level when the cohort exists", () => {
        expect(test.subject.queryDemographics("adp-fall-2017")).toBe(
          test.processedData.cohorts[test.cohort].demographics
        );
      });

      it("Should return undefined when cohort does not exist", () => {
        expect(() => test.subject.queryDemographics("adp-fall-2016")).toThrow();
      });
    });
  });
});
