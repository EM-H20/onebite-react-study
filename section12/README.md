<img width="626" height="415" alt="스크린샷 2025-07-18 오후 10 40 02" src="https://github.com/user-attachments/assets/c4eb1cf5-0b64-4c79-8480-76d22bf35bd9" />

<h2>일기 삭제 기능 - useContext와 DiaryDispatchContext 사용</h2>

<p>
  <code>DiaryItem</code> 컴포넌트에서 <b>삭제하기</b> 버튼을 누르면 <code>App.jsx</code>에서 전달한 <code>onDelete</code> 함수가 실행되도록 구현할 수 있습니다.
</p>

<ol>
  <li>
    <b>Context에서 onDelete 함수 가져오기</b>
    <pre><code>
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

const { onDelete } = useContext(DiaryDispatchContext);
    </code></pre>
  </li>
  <li>
    <b>삭제 버튼에 onDelete 연결</b>
    <pre><code>
&lt;Button
  text="삭제하기"
  type="NEGATIVE"
  onClick={() =&gt; onDelete(id)}
/&gt;
    </code></pre>
  </li>
  <li>
    <b>전체 예시 코드</b>
    <pre><code>
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import Button from './Button';

const DiaryItem = ({ id, ... }) =&gt; {
  const { onDelete } = useContext(DiaryDispatchContext);

  return (
    &lt;div className="button_section"&gt;
      &lt;Button
        text="삭제하기"
        type="NEGATIVE"
        onClick={() =&gt; onDelete(id)}
      /&gt;
    &lt;/div&gt;
  );
};
    </code></pre>
  </li>
</ol>

<p>
  위와 같이 구현하면, 삭제 버튼 클릭 시 <code>onDelete</code> 함수가 호출되어 해당 일기가 삭제됩니다.
</p>
