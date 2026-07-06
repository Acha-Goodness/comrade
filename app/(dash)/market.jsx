import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

const { width } = Dimensions.get('window');

const Market = () => {

    const params = useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 bg-[#FFFFFF] p-[20%]">
            <View className="flex-1">
                <View className="flex-row items-center justify-between">
                    <View></View>
                    <View className="flex-row items-center justify-between gap-2">
                        <Text className="text-[20px] font-poppins text-[#000]">Market Place</Text>
                    </View>
                    <View className="p-[3%] rounded-[50px]">
                        <View className="bg-[#0452df] rounded-full w-5 h-5 flex items-center justify-center absolute top-1 right-2.5 z-10">
                            <Text className="text-[10px] text-white font-[500] font-inter">1</Text>
                        </View>
                        <EvilIcons name="cart" size={25} color="#000000" />
                    </View>
                </View>

                <View className="mt-[3%] flex-row items-center justify-center gap-2">
                    <TextInput
                        placeholder="Search"
                        className="w-[80%] py-4 px-3 rounded-[10px] border border-2 border-[#F0F0F0]"
                        id="search"
                        type="text"
                        autoCapitalize="none"
                        placeholderTextColor="#777"
                    />
                    <TouchableOpacity className="p-3 rounded-[10px] border border-2 border-[#F0F0F0]">
                        <Feather name="sliders" size={25} color="#000000ff" />
                    </TouchableOpacity>
                </View>

                <View className="mt-4 px-2">
                    <FlatList
                        data={[
                            { id: 1, text: 'All', icon: 'shopping-basket' },
                            { id: 2, text: 'Books', icon: 'diversity-3' },
                            { id: 3, text: 'Electronics', icon: 'manage-search' },
                            { id: 4, text: 'Furniture', icon: 'report' },
                            { id: 5, text: 'Clothes', icon: 'report' },
                            { id: 6, text: 'Hostel Essentials', icon: 'report' },
                        ]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 10 }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View className="flex justify-center items-center">
                                <View className={`w-[50px] p-3 rounded-[5px] items-center bg-[#f2f2f2ff]`}>
                                    <MaterialIcons name={item.icon} size={24} color={item.iconColor} />
                                </View>
                                <Text numberOfLines={1} ellipsizeMode="tail" className="text-[10px] text-center text-[#000] w-[55px] font-poppins-medium mt-2">{item.text}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Market;