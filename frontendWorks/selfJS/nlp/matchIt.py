# -*- coding: utf-8 -*-

import language_check



def check_lang(text):
    tool = language_check.LanguageTool('en-GB')
    matches = tool.check(text)
    print len(matches)
    print matches[1]
    return language_check.correct(text, matches)

if __name__ == "__main__":
  import sys
  data = sys.argv[1]

  print check_lang(data)
