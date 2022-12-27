import {MEALS, CATEGORIES} from "../data/dummy-data";
import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "../components/MealItem";
import {useLayoutEffect} from "react";

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId; // per capire quale card ho cliccato

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);



    function rendMealItem(itemData){
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
       return (
           <MealItem {...mealItemProps} />
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
       flex: 1
   }
});