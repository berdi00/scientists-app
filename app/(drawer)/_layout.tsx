import { Drawer } from "expo-router/drawer";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useLanguage } from "../../src/context/LanguageProvider";

type TProps = {
  onPress: () => void;
  title: string;
  isCurrentLanguage: boolean;
};

const CustomLanguageButton = ({
  onPress,
  title,
  isCurrentLanguage,
}: TProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ marginHorizontal: 10, marginVertical: 10 }}
  >
    <Text style={isCurrentLanguage ? styles.lang : null}>{title}</Text>
  </TouchableOpacity>
);

export default function Layout() {
  const { t } = useTranslation();
  const { language, changeLanguage } = useLanguage();
  return (
    <Drawer
      screenOptions={{
        headerRight: ({}) => (
          <View style={styles.viewChangeLang}>
            <CustomLanguageButton
              title="TK"
              onPress={() => {
                changeLanguage("tk");
              }}
              isCurrentLanguage={language === "tk"}
            />
            <CustomLanguageButton
              title="EN"
              onPress={() => {
                changeLanguage("en");
              }}
              isCurrentLanguage={language === "en"}
            />
          </View>
        ),
      }}
    >
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: t("home"),
          title: t("home"),
        }}
      />
      <Drawer.Screen
        name="mechanics" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: t("mechanics"),
          title: t("mechanics"),
        }}
      />
      <Drawer.Screen
        name="thermo" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: t("thermo"),
          title: t("thermo"),
        }}
      />
      <Drawer.Screen
        name="electricity" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: t("electricity"),
          title: t("electricity"),
        }}
      />
      <Drawer.Screen
        name="optics" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: t("optics"),
          title: t("optics"),
        }}
      />
      <Drawer.Screen
        name="atom" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: t("atom"),
          title: t("atom"),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  viewChangeLang: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  lang: {
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
});