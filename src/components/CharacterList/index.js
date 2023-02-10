import { Card, Space } from "antd";
import { useGetCharactersQuery } from "../../api";
import useStore from "../../store";

const CharacterList = () => {
  const page = useStore((state) => state.page);
  const { data } = useGetCharactersQuery(page);

  return (
    <Space size="middle" direction="vertical">
      {data?.results.map((character) => (
        <Card
          hoverable
          style={{
            width: 240
          }}
          cover={<img alt="example" src={character.image} />}
          key={character.id}
        >
          {character.name}
        </Card>
      ))}
    </Space>
  );
};

export default CharacterList;
