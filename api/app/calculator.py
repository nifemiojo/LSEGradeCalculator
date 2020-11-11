
from statistics import mean

class GradeCalculator():
    def __init__(self, grades):
        """
        This is an example dictionary for development purposes
        Values will be a list of flexible length depending on # of half units
        """
        self.grades = grades
        self.fullMarks = []


    def handleHalfUnits(self):
        """
        Function identifies half units and takes their average
        Alters state so there are exactly 4 unit scores in each year
        Also converts values to floats
        """
        for year, results in self.grades.items():
            # Convert to float
            self.grades[year] = [float(x) for x in results]
            results = [float(x) for x in results]

            # When there are no half-units in a year
            if len(results) == 4:
                pass
            else:
                numberOfHalfUnits = (len(results) - 4) * 2
                self.grades[year] = self.grades[year][:-numberOfHalfUnits]
                halfUnits = results[-numberOfHalfUnits:]
                # Average of the pairs
                for x in range(0, len(halfUnits), 2):
                    hfu = halfUnits[x: x+2]
                    avg = mean(hfu)
                    self.grades[year].append(avg)

  
    def calculateFirstYearAverage(self):
        """
        Function finds the average of first year module grades
        """
        fYearGrades = self.grades["fyear"]

        # We only want the top 3 grades
        fYearGrades.sort()
        fYearGrades.pop(0)

        firstYearAverage = mean(fYearGrades)

        return firstYearAverage


    def calculateGradeClassifiction(self):
        """
        Function returns the users grade classification as per LSE's Guidance
        """
        #Define Classification
        gradeClassification = ["Pass", "Third class", "Lower second class", "Upper second class", "First-class" ]

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
        if failGrade >= 3:
            enumeratedGrade = 0
        elif firstClassGrade >= 5 or (firstClassGrade >= 4 and sumOfGrades >= 590):
            enumeratedGrade = 4
        elif upperSecondClassGrade >= 5 or (upperSecondClassGrade >= 4 and sumOfGrades >= 515):
            enumeratedGrade = 3
        elif lowerSecondClassGrade >= 5 or (lowerSecondClassGrade >= 4 and sumOfGrades >= 440):
            enumeratedGrade = 2
        elif thirdClassGrade >= 8:
            enumeratedGrade = 1
        else:
            enumeratedGrade = 0
    
        if failGrade == 2 and enumeratedGrade != 0:
            enumeratedGrade -= 1

        print(self.fullMarks)

        return gradeClassification[enumeratedGrade]


        
def gradeCalculation(grades):
    """
    Main function that executes the calculation
    """
    gradesObject = GradeCalculator(grades)
    gradesObject.handleHalfUnits()
    firstYearAverage = gradesObject.calculateFirstYearAverage()

    gradesObject.fullMarks = gradesObject.grades["syear"] + gradesObject.grades["tyear"]
    gradesObject.fullMarks.append(firstYearAverage)
    finalResult = gradesObject.calculateGradeClassifiction()

    return finalResult
