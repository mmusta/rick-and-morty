import { Button, Space, Typography } from "antd";
import { useGetCharactersQuery } from "../../api";
import useStore from "../../store";

const { Text } = Typography;

const Pager = ({ meta }) => {
  const page = useStore((state) => state.page);
  const { data } = useGetCharactersQuery(page);
  const incrementPage = useStore((state) => state.incrementPage);
  const decrementPage = useStore((state) => state.decrementPage);
  console.log({ data });

  const increment = () => incrementPage(data?.info?.pages);

  return (
    <Space size="middle">
      <Button onClick={decrementPage}>Prev Page</Button>
      <Text>{page}</Text>
      <Button onClick={increment}>Next Page</Button>
    </Space>
  );
};

export default Pager;
