from exceptions.uiException import UiException


class ConsoleUi:

    def __init__(self, service):
        self.__service = service
        self.__noUsers = 0
        self.__noStudents = 0
        self.__noTeachers = 0
        self.__noStaff = 0

    def __readUsers(self):
        print()
        self.__noUsers = int(input("Enter the number of users: "))

        self.__noTeachers = int(input("Enter the number of teachers: "))

        if self.__noTeachers < 10:
            raise UiException("Too few teachers!")

        self.__noStudents = int(input("Enter the number of students: "))

        self.__noStaff = self.__noUsers - (self.__noTeachers + self.__noStudents)

        if self.__noStaff <= 0:
            raise UiException("Too many students and teachers for the given number of users!")

        print("Staff members: " + str(self.__noStaff))

    def start(self):
        running = True

        while running:
            try:
                self.__readUsers()
            except UiException as ex:
                print(ex)
                continue

            running = False
