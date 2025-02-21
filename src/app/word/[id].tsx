import { Stack, useLocalSearchParams } from "expo-router";
import { useMemo } from "react";
import { View } from "react-native";

import { words } from "~/pages/WordbookList/data";
import { Text } from "~/shared/ui";

export default function Word() {
  const { id } = useLocalSearchParams();
  const word = useMemo(
    () => words.filter(({ id: wordId }) => wordId === `${id}`)[0],
    [id],
  );

  return (
    <View className="flex-1 items-center justify-center p-2">
      <Stack.Screen
        options={{
          title: word.words.join(" / "),
        }}
      />
      <Text>{word.words.join(" / ")}</Text>
    </View>
  );
}
