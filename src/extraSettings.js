/**
 * 선언: 이 프로젝트는 기술 학습과 오락을 위한 것으로, 수정된 웹사이트를 대규모로 전파하거나 상업적으로 사용하지 않도록 주의하여 저작권 침해를 피해야 합니다!
 */

// 추가 점수: 숫자 수정
let extraScore = 1;

// 무적 모드: true를 false로 변경
let wuDi = true;

// 첫 번째 과일: 숫자를 0-10으로 수정, 0은 포도, 9는 반개의 수박
let firstFruit = 0;

// 과일 합성 반전: false를 true로 변경
let reverseLevelUp = false;

// 지정된 과일 생성: 기본값: 반전 비활성화 0-5, 반전 활성화 6-11. 해당 숫자를 수정하여 무작위로 생성되는 과일 범위를 조절할 수 있습니다.
const minRandomFruitNum = reverseLevelUp ? 6 : 0; // 무작위 과일 최소값 생성 (0-10) 0은 포도, 9는 반개의 수박
const maxRandomFruitNum = reverseLevelUp ? 11 : 5; // 무작위 과일 최대값 생성 (1-11) 0은 포도, 9는 반개의 수박
let setFruits = {
  // 처음 몇 번의 과일을 지정합니다. 임의의 숫자를 입력할 수 있습니다. 0은 포도, 9는 반개의 수박
  startFruits: reverseLevelUp ? [10, 10, 9, 8, 8, 7] : [0, 0, 1, 2, 2, 3],
  randomFunction: () => {
    return minRandomFruitNum + Math.floor(Math.random() * (maxRandomFruitNum - minRandomFruitNum));
  }
}

// 과일을 더 Q탄으로 만들기: false를 0보다 크고 1보다 작은 임의의 소수로 변경 (추천 0.9)
let fruitQTan = 0.5;

// 과일의 하강을 느리게 만들기: false를 0보다 큰 임의의 숫자로 변경, 값이 클수록 저항이 커져 더 느리게 떨어집니다 (추천 5)
let fruitSlowDown = false;

// 오른쪽 상단 아이콘 클릭으로 과일 변경: false를 true로 변경
let clickChangeFruit = true;

let adLink = 'https://www.twitch.tv/p_dila';

document.getElementsByTagName("title")[0].innerText = '르미가 바치는 디라 팬게임';

// 점수 선택 창 활성화: false를 true로 변경
let selectModal = false;
