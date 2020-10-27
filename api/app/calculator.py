import re

Grades = {
    "firstYear": [0, 0, 0, 0, 0, 0, 0, 0],
    "secondYear": [0, 0, 0, 0, 0, 0, 0, 0],
    "thirdYear": [0, 0, 0, 0, 0, 0, 0, 0]
}


def main():
    GetGradesFromUser(Grades)
    firstYearAverage = calculateFirstYearAverage()

    finalSetOfGrades = []
    finalSetOfGrades.append(firstYearAverage)
    finalSetOfGrades += Grades["secondYear"]
    finalSetOfGrades += Grades["thirdYear"]

    for i in range(len(finalSetOfGrades)):
        finalSetOfGrades[i] = float(finalSetOfGrades[i])

    finalResult = calculateGradeBracket(finalSetOfGrades)

    print(finalResult)

# We can also check what year the student is to limit their inputs, and then calculate what they need for each grade

# Dictionary is flexible to number of modules a student completed


def GetGradesFromUser(dictionary):
    length = 0
    for value in dictionary.values():
        length += len(value)

    firstYearLength = len(dictionary["firstYear"])
    secondYearLength = len(dictionary["secondYear"])

    for i in range(length):
        if i < firstYearLength:
            isHalfUnitPresent = True
            while(type(isHalfUnitPresent) != bool):
                isHalfUnitPresent = input(
                    "Did you take any half-units in your first year? Answer yes or no")
                if isHalfUnitPresent:
                    numberOfHalfUnits = input(
                        "How many half-units did you take in your first year:")
            result = input(f"First Year Result {i + 1} :")
            dictionary["firstYear"][i] = float(result)
            # Get input from user to check if they have a half unit and how many if that is the case
            # If they have a half unit then input those single grades at the end of the array, or maybe even create a seperate half unit array
            # May be time to create a grades class, first obj would be first year grades, would store the data for half units and full units
        elif (firstYearLength - 1) < i < (firstYearLength + secondYearLength):
            result = input(f"Second Year Result {i - (firstYearLength - 1)} :")
            dictionary["secondYear"][i - (firstYearLength)] = float(result)
        else:
            result = input(
                f"Third Year Result {i - (firstYearLength + secondYearLength - 1)} :")
            dictionary["thirdYear"][i -
                                    (firstYearLength + secondYearLength)] = float(result)

# def GetGradesFromUser():
#     for i in range(0,12):
#         if i < 4:
#             result = input(f"First Year Result {i + 1} :")
#             Grades["firstYear"][i] = result
#         elif 3 < i < 8:
#             result = input(f"Second Year Result {i - 3} :")
#             Grades["secondYear"][i - 4] = result
#         else:
#             result = input(f"Third Year Result {i - 7} :")
#             Grades["thirdYear"][i - 8] = result


# def extractHalfModules:
# First Year
#   Grades["firstYear"].


def calculateFirstYearAverage():
    temp = Grades["firstYear"]
    temp.sort()
    temp.pop(0)

    sum = 0
    for grade in temp:
        sum += int(grade)

    firstYearAverage = sum / 3
    return firstYearAverage

    # Add conditional for if the first year


def calculateGradeBracket(list):
    sumOfGrades = sum(list)

    firstClassGrade = 0
    upperSecondClassGrade = 0
    lowerSecondClassGrade = 0
    thirdClassGrade = 0
    failGrade = 0

    for item in list:
        if item >= 70:
            firstClassGrade += 1
            sumOfGrades += item
        elif 70 > item >= 60:
            upperSecondClassGrade += 1
            sumOfGrades += item
        elif 60 > item >= 50:
            lowerSecondClassGrade += 1
            sumOfGrades += item
        elif 50 > item >= 40:
            thirdClassGrade += 1
            sumOfGrades += item
        else:
            failGrade += 1
            sumOfGrades += item

    if firstClassGrade >= 10 or (firstClassGrade >= 8 and sumOfGrades >= 1180):
        return "You achieved a first-class grade"
    elif upperSecondClassGrade >= 10 or (upperSecondClassGrade >= 8 and sumOfGrades >= 1030):
        return "You achieved an upper second class grade"
    elif lowerSecondClassGrade >= 10 or (lowerSecondClassGrade >= 8 and sumOfGrades >= 880):
        return "You achieved a lower second class grade"
    elif thirdClassGrade >= 16:
        return "You achieved a third class grade"


if __name__ == "__main__":
    main()
