from exceptions.uiException import UiException


class ConsoleUi:

    def __init__(self):
        self.__noUsers = 0
        self.__noStudents = 0
        self.__noTeachers = 0
        self.__noStaff = 0
        self.__noFaculties = 0

    def __readUsers(self):
        print()
        self.__noUsers = int(input("Enter the number of users: "))
        self.__noTeachers = int(input("Enter the number of teachers: "))
        self.__noStudents = int(input("Enter the number of students: "))
        self.__noStaff = self.__noUsers - (self.__noTeachers + self.__noStudents)

        if self.__noStaff <= 0:
            raise UiException("Too many students and teachers for the given number of users!")

        print("Staff members: " + str(self.__noStaff))

    def __readFaculties(self):
        print()
        mn = min(17, self.__noTeachers)
        self.__noFaculties = int(input("Enter the number of faculties(<= " + str(mn) + "): "))

        if self.__noFaculties > mn:
            raise UiException("Too many faculties entered")

    def start(self):
        running = True

        while running:
            try:
                self.__readUsers()
                self.__readFaculties()
            except UiException as ex:
                print(ex)
                continue

            running = False
