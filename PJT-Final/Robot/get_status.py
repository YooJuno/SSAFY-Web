import random

def speed():
    speed = random.randint(0, 40)
    '''

    로봇 속도 코드 들어갈 예정

    '''
    return speed

def temperature():
    temp = random.randint(-20, 40)
    '''

    라즈베리파이 온습도 센서 코드 들어갈 예정

    '''
    return temp

def humidity():
    humid = random.randint(0, 100)
    '''

    라즈베리파이 온습도 센서 코드 들어갈 예정

    '''
    return humid


def battery():
    charge = random.randint(0, 100)
    '''

    라즈베리파이 전원 상태 코드 들어갈 예정

    '''
    return charge
    