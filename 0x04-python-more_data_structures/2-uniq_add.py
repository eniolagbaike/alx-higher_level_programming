#!/usr/bin/python3
def uniq_add(my_list=[]):
    result_list = []
    result = 0
    for item in my_list:
        if item not in result_list:
            result_list.append(item)
    for uniqs in result_list:
        result += uniqs
    return result
