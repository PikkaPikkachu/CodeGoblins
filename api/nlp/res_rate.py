import key
import nltk
from nltk.corpus import wordnet as wn
from textblob import TextBlob
import json
import re

def get_nouns(lines):
    # function to test if something is a noun
    is_noun = lambda pos: pos[:2] == 'NN'
    # do the nlp stuff
    tokenized = nltk.word_tokenize(lines)
    nouns = [word.lower() for (word, pos) in nltk.pos_tag(tokenized) if is_noun(pos)]
    return nouns


def get_rating(lines, keywords):
    rating = 0
    for word in lines:
      if word.lower() in keywords:
        rating = rating + 1
    return rating


def extend_rate(keywords):
    for tag in keywords:
        limit = 0
        for syn in wn.synsets(tag):
            for lemma in syn.lemmas():
                keywords.append(lemma.name())
            limit=limit+1
        if(limit>5):
            break
    return keywords

def load_dirty_json(dirty_json):
    regex_replace = [(r"([ \{,:\[])(u)?'([^']+)'", r'\1"\3"'),
        (r" False([, \}\]])", r' false\1'), (r" True([, \}\]])", r' true\1')]
    for r, s in regex_replace:
        dirty_json = re.sub(r, s, dirty_json)
    clean_json = json.loads(dirty_json)
    return clean_json

if __name__ == "__main__":
  import sys
  resume = sys.argv[1]
  data = load_dirty_json(resume)

  keywords = get_nouns(data["spec"])
  print keywords
  keywords = extend_rate(keywords)
  print keywords
  res_key = get_nouns(data["resume"])
  print get_rating(res_key, keywords)
  sys.stdout.flush()
  # extend_rate(keywords)
