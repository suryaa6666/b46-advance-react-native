import axios from "axios";
import { Button, FlatList, Image, Text, View } from "native-base";
import React, { useEffect, useState } from "react";

function Axios() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await axios.get(
      "https://api.kontenbase.com/query/api/v1/da091f4b-35ec-4703-9194-7c4cb1da398d/Todos"
    );
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={{ borderWidth: 2, borderColor: "black" }}>
              <Text>{item._id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
              {item.image ? (
                <Image
                  source={{ uri: item.image[0].url }}
                  alt={item.image[0].url}
                  width={200}
                  height={200}
                />
              ) : null}
            </View>
          );
        }}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

export default Axios;
