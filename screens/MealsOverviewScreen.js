import {MEALS} from "../data/dummy-data";
import {FlatList, StyleSheet, Text, View} from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route}){
    const catId = route.params.categoryId; // per capire quale card ho cliccato

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function rendMealItem(itemData){
       return (
           <MealItem title={itemData.item.title}
           />
       );
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={rendMealItem}/>
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       padding: 16
   }
});