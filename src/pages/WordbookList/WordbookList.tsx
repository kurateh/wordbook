import { FlatList, View } from "react-native";

import { wordBooks } from "./data";

export const WordbookList = () => {
  return (
    <View className="p-4">
      <FlatList
        data={wordBooks}
        renderItem={({ item: _ }) =>
          // <Link href={`/wordbook/${item.id}`} asChild>
          //   <Button className="my-2 h-fit p-4" size="xl" variant="outline">
          //     <ButtonText>{item.name}</ButtonText>
          //   </Button>
          // </Link>
          null
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
