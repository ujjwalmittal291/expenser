# import write
from datetime import datetime
from email import header
from fileinput import filename
import pandas as pd
import os
import csv
import glob

from sqlalchemy import column

def checkyn (val) : 
    if str(val).lower()=='y':
        return True
    else : 
        return False

def calcRP(amt,per):
    return float(amt*per)


def main() :
    enterExpense = False
    headers = ['Timestamp','Details','Type','Amount','CB_Category','Reward_points']
    # Details : What is the expense    # Type : Credit/Debit    # CB_Category : 5%? or 1% (5,1,0)
    expenseDF = pd.DataFrame()
    filelist = glob.glob('*.csv')
    fileDir = {}
    for x in range(len(filelist)):
        fileDir[f"{x+1}"] = str(filelist[x])
    filelist.clear()
    # print(fileDir)
    print("List of available files : ")
    for file in fileDir:
        print(f"{file}.{fileDir[file]}")
    fileName = fileDir[input("Select a file to work on :")]
    if os.path.exists(fileName):
        if os.stat(fileName).st_size > 0 : 
            expenseDF = pd.read_csv(fileName, index_col=None)
        else : 
            # expenseDF=pd.DataFrame(headers)
            # pd.DataFrame(headers).to_csv(fileName)
            f = open(fileName,'w')
            f.write(',y'.join(headers))
            f.close()
            expenseDF = pd.read_csv(fileName, index_col=None)
            # print("")
    print(expenseDF)

    # Enter Expenses
    enterExpense = checkyn(input("Enter Expenses?(y/n)"))
    while enterExpense :
        expense = {}
        expense[headers[0]] = str(datetime.now()).split('.')[0]
        expense[headers[1]] = input("Expense Details : ")
        expense[headers[2]] = input("Category (C/D) : ")
        if expense[headers[2]]=='c' | expense[headers[2]]=='C' : #Credit
            expense[headers[3]] = float(input("Amount : "))
            expense[headers[4]] = 0.00
            expense[headers[5]] = 0.00
        elif expense[headers[2]]=='d' | expense[headers[2]]=='D' : #Debit
            expense[headers[3]] = float(input("Amount : "))
            expense[headers[4]] = float(int(input("CB PPercentage : "))/100)
            expense[headers[5]] = calcRP(expense[headers[3]],expense[headers[4]])
        expenseDF = expenseDF.concat(expense,ignore_index=True)
        expense.to_csv(fileName,mode='a',header=headers,index=False)
        enterExpense = checkyn(input("Enter more expenses?(y/n)"))
    print(expenseDF)
main()