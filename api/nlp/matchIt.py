# -*- coding: utf-8 -*-

import language_check

def check_lang(text):
    lc = {}
    tool = language_check.LanguageTool('en-GB')
    matches = tool.check(text)
    if len(matches):
        lc["error"] = "There are a couple of grammatical/punctuation errors."
        lc["correct"] = language_check.correct(text, matches)
    else:
        lc["correct"] = "Everything looks good!"
    return lc

if __name__ == "__main__":
  import sys
  data = sys.argv[1]

  print check_lang(data)
