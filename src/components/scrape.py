from bs4 import  BeautifulSoup
import requests

words = []
for i in range(0,114):
    try:
        url = f'https://coptic-dictionary.org/results.cgi?page={i}'
        response = requests.get(url)
        html = response.text
        soup = BeautifulSoup(html, 'lxml')
        table = soup.find("table", class_="entrylist")
        cells = table.find_all("td", class_="orth_cell")
        for cell in cells:
            for child in cell.children:
                text = (child.text+'\n')
                words.append(text)
    except:
        print(f"Error on page {i}")
# Remove weird characters remove duplicates and write to file
for i in range(len(words)):
    words[i] = words[i].replace('-',"")
words = [*set(words)]
f = open("src/components/html.txt", "wb")
for word in words:
    f.write(word.encode("utf-8"))
f.close()

# f.write(response.text.encode('utf-8'))
# # for child in table.children:
    
#     # print(child)
# # for parent in td:
# #     child = parent.findChildren("a", recursive=False)
# #     print(child)
# # except:
# #     print("error")
