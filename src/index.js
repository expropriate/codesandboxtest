import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  addList1(inputText);
};

// 未完了リスト追加
const addList1 = (text) => {
  //divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ
  const li = document.createElement("li");
  li.innerText = text;

  // 追加buttton
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグdivを削除
    const target = compButton.parentNode;
    delFromList1(target);

    //完了リストに追加
    const addTarget = compButton.parentNode;

    // todo内容
    const texted = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //li
    const li = document.createElement("li");
    li.innerText = texted;

    // 戻すbutton生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押されたボタンの親タグdivを削除
      const delTarget = backButton.parentNode;
      document.getElementById("list2").removeChild(delTarget);

      // todo内容
      const tex = delTarget.firstElementChild.innerText;
      addList1(tex);
    });

    // タグの子要素に各様を格納
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("list2").appendChild(addTarget);
  });

  // 削除buttton
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグdivを削除
    const target = delButton.parentNode;
    delFromList1(target);
  });

  // タグの子要素に各様を格納
  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(delButton);

  // 未完了リストに追加
  document.getElementById("list1").appendChild(div);
};

// 未完了リストから指定要素を削除
const delFromList1 = (target) => {
  document.getElementById("list1").removeChild(target);
};

document
  .getElementById("add-buton")
  .addEventListener("click", () => onClickAdd());
