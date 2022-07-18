//오류 수정 전 코드:  type HelloWorld = any

type HelloWorld = string; // 수정 후 => 타입을 string으로 지정해주었다.

import type { Equal, Expect, NotAny } from "../utils";

type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
