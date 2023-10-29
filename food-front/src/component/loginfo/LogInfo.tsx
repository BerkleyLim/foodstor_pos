import { Card, CardBody, CardHeader, Table } from "reactstrap";
import styles from "../index.module.scss";
import { useRecoilState } from "recoil";
import { logInfoState } from '../../recoil/state/logInfoState'
import { useQuery } from "react-query";

const LogInfo = ():any => {
  const [logInfo, setLogInfo] = useRecoilState(logInfoState);
  const { isLoading, isError, data } = useQuery({
    queryKey: ['userLog'],
    queryFn: () =>
      fetch('http://localhost:8080/api/log/').then(
        (res) => res.json()
      ).then(
        (res) => {
          setLogInfo(res)
        }
      ),
  });

  if (isLoading) return 'Loading...';

  if (isError) return 'An error has occurred : ';

  console.log(data)
  return (
    <Card body className={`${styles?.kioskLog}`}>
      <CardHeader tag="h1">주문 정보 관련 로그(사용자용)</CardHeader>
      <CardBody>
        <Table border={1} className={`w-100`}>
          <thead className={`w-100`}>
            <tr>
              <th>번호(lno)</th>
              <th>사용 메뉴(pageNo-PateEventTitle)</th>
              <th>이벤트(pageEventView)</th>
              <th>로그 생성 시간(crtTime)</th>
            </tr>
          </thead>
          <tbody>
            {logInfo?.map((log: any, index: number) =>
              <tr key={index}>
                <td>{log?.lno}</td>
                <td>{log?.pageNo} - {log?.pageEventTitle}</td>
                <td>{log?.pageEventView}</td>
                <td>{log?.crtTime}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default LogInfo;
