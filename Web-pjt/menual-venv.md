## venv 사용법
venv 는 파이썬에 내장되어있는 모듈이기 때문에 별도의 설치 없이 사용할 수 있다.

이동된 경로에 폴더로 생성되기 때문에 가상환경을 세팅할 폴더에 이동한 뒤 사용하면 된다.


파일 이동
```bash
cd 가상환경을 설치할 경로
```
 

2.1. 가상환경 생성
```bash
python -m venv 가상환경이름
```
 

2.2. 가상환경 활성화 (활성화를 해야 가상환경이 켜짐)
```bash
source 가상환경이름/Scripts/activate
```

2.3. 가상환경 비활성화 (가상환경 끄기)
```bash
deactivate
```


2.4. 설치된 패키지 리스트 txt 파일로 변환
git hub 에 가상환경 폴더를 ignore 하고 푸시하고 싶을 때 패키지 리스트를 txt 파일로 변환할 수 있다

 
```bash
pip freeze > requirements.txt
```
bash


2.5. 변환된 txt 파일로 패키지 설치하기
```bash
pip install -r 파일이름.txt
```