grades = [98,38,69]
max_grades = [100,50,75]

earned_perc = []

final_percent = 0
grey_percent = 0

def calc_perc (grades, max_grades):
    i = 0
    while i < len(grades):
        earned_perc.append(grades[i]/max_grades[i])
        i += 1

    return earned_perc

def calc_average(num):
    sum_num = 0
    for t in num:
        sum_num = sum_num + t           

    avg = sum_num / len(num)
    return avg

final_percent = round((calc_average(calc_perc(grades, max_grades))), 2)
final_percent *= 100
def calc_grey (final_percent):
    return 100 - final_percent

grey_percent = round(calc_grey(final_percent), 2)

print("final percent " + str(final_percent))
print("grey percent " + str(grey_percent))
