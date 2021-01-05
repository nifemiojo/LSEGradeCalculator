
from statistics import mean

class GradeCalculator():
    def __init__(self, grades):
        """
        On initialisation define the users grade in dict
        Values will be a list of flexible length depending on # of half units
        Define a list of full marks which will be used to track the final relevant marks
        """
        self.grades = grades
        self.fullMarks = []
        self.noFailed = 0

    def handleHalfUnits(self):
        """
        Method identifies half units counts them once, counts full-units twice
        Alters state so there are exactly 8 unit scores in each year
        Also converts values to floats
        """
        for year, results in self.grades.items():
            self.grades[year] = [float(x) for x in results]
            results = [float(x) for x in results]
            if len(results) == 4:
                self.grades[year] = self.grades[year] * 2
            else:
                numberOfHalfUnits = (len(results) - 4) * 2
                self.grades[year] = (self.grades[year][:-numberOfHalfUnits]) * 2
                halfUnits = results[-numberOfHalfUnits:]
                self.grades[year] = self.grades[year] + halfUnits
        
    def calculateFailed(self):
        """
        Method calculates number of failed grades overall
        """
        for grade in self.grades.values():
            self.noFailed += len([x for x in grade if x < 40])

  
    def calculateFirstYearAverage(self):
        """
        Function finds the average of first year module grades
        """
        fYearGrades = self.grades["fyear"]
        fYearGrades.sort()
        fYearGrades = fYearGrades[2:]

        firstYearAverage = mean(fYearGrades)

        return firstYearAverage


    def calculateGradeClassifiction(self):
        """
        Function returns the users grade classification as per LSE's Guidance
        """
        #Define Classification
        gradeClassification = ["a pass", "a third class", "a lower second class", "an upper second class", "a first class" ]

        #Initialise counter for each grade, enumeration variable
        firstClassGrade = upperSecondClassGrade = lowerSecondClassGrade = thirdClassGrade = failGrade = 0
        enumeratedGrade = 0
        sumOfGrades = sum(self.fullMarks)

        # Calculate how many grades are in and ABOVE each boundary
        for grade in self.fullMarks:
            if grade >= 70:
                firstClassGrade += 1
            if grade >= 60:
                upperSecondClassGrade += 1
            if grade >= 50:
                lowerSecondClassGrade += 1
            if grade >= 40:
                thirdClassGrade += 1
            else:
                failGrade += 1

        # Enumerate the users grade based on LSE's criteria
        if self.noFailed >= 6:
            enumeratedGrade = 0
        elif firstClassGrade >= 10 or (firstClassGrade >= 8 and sumOfGrades >= 1180):
            enumeratedGrade = 4
        elif upperSecondClassGrade >= 10 or (upperSecondClassGrade >= 8 and sumOfGrades >= 1030):
            enumeratedGrade = 3
        elif lowerSecondClassGrade >= 10 or (lowerSecondClassGrade >= 8 and sumOfGrades >= 880):
            enumeratedGrade = 2
        elif thirdClassGrade >= 16:
            enumeratedGrade = 1
        else:
            enumeratedGrade = 0

        #Penalty Rules needs update: Fail Grades needs to count half units and all first year papers, also fail (non-graduation) classification
        if 2 < self.noFailed < 6 and enumeratedGrade != 0:
            enumeratedGrade -= 1

        return gradeClassification[enumeratedGrade]


        
def gradeCalculation(grades):
    """
    Main function that executes the calculation
    """
    gradesObject = GradeCalculator(grades)
    gradesObject.handleHalfUnits()
    gradesObject.calculateFailed()
    firstYearAverage = gradesObject.calculateFirstYearAverage()

    gradesObject.fullMarks = gradesObject.grades["syear"] + gradesObject.grades["tyear"]
    gradesObject.fullMarks.append(firstYearAverage)
    gradesObject.fullMarks.append(firstYearAverage)
    finalResult = gradesObject.calculateGradeClassifiction()

    return finalResult
