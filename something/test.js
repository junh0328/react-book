const [number, setNumber] = useState(0);
// prevNumbers 는 현재 number 값을 가리킵니다.

const onIncrease = useCallback(
  () => setNumber((prevNumber) => prevNumber + 1),
  []
);
