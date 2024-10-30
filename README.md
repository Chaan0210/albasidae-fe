# Repository for albasidae Front-end

## 프로젝트 실행

- node.js 설치
- git clone https://github.com/AlbaSidaeUOS/AlbaSidae-FE.git

```
# 의존성 설치
npm install

# 실행
npm start
```

## Prettier 설정

- 코드 포맷팅을 통일하기 위함
- vscode extension(Ctrl or Command + Shift + X)에서 Prettier 설치
- 설정(Ctrl or Command + ,)에서 Default Formatter로 Prettier - Code formatter를 선택
- Format On Save 옵션 체크
- 이후 저장할 때마다 formatting이 잘 되는지 확인(세미콜론이 모든 코드 끝에 생성되고 불필요한 공백 등이 사라지게 됨)

## 가이드

- Notion에서 새로운 업무 단위마다 티켓을 생성 후, Decription에 어떤 내용인지 작성해주세요.
- 각 티켓의 ID명과 동일한 branch를 생성해주세요.
- 개별 branch에서 작업을 모두 한 뒤, 모든 commit을 push하고 github에서 PR(Pull Request)을 합니다.
- 하나의 branch의 내용이 너무 많지 않도록 만들어주세요.
- 새로운 branch를 만들때, main branch에서 git pull을 하고 생성해주세요.
- Commit message는 https://velog.io/@jiheon/Git-Commit-message-%EA%B7%9C%EC%B9%99 를 따라주세요.
- 주의: **main branch에 절대 push 하지마세요.**
