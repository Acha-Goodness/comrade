import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions, FlatList, Image } from 'react-native';
import { useState, useEffect, useMemo, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import all from "@/assets/images/all.png";
import book from "@/assets/images/book.png";
import elec from "@/assets/images/electronics.png";
import furn from "@/assets/images/chair.png";
import cloth from "@/assets/images/cloth.png";
import essensial from "@/assets/images/essensial.png";
import seat from "@/assets/images/seat.png";
import ebike from "@/assets/images/ebike.png";
import devices from "@/assets/images/elec.png";
import headset from "@/assets/images/headset.png";
import bob from "@/assets/images/bob.png";
import propic from "@/assets/images/propic.jpg";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

const { width } = Dimensions.get('window');

const Market = () => {
    const params = useLocalSearchParams();
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => [0.1, '66%'], [])
    const [selectedProduct, setSelectedProduct] = useState(null);

    const product = [
        { id: 1, text: 'Electronic Bike', price: "N10,000", distance: "500m away", img: ebike, desc: "High quality sound with noise cancellation, used only for two month" },
        { id: 2, text: 'Wireless Headphones', price: "N10,000", distance: "500m away", img: headset, desc: "High quality sound with noise cancellation, used only for two month" },
        { id: 3, text: 'Ergonomic Chair', price: "N10,000", distance: "500m away", img: seat, desc: "High quality sound with noise cancellation, used only for two month" },
        { id: 4, text: 'Device', price: "N10,000", distance: "500m away", img: devices, desc: "High quality sound with noise cancellation, used only for two month" },
    ]

    const handleClosePress = () => {
        bottomSheetRef.current?.close();
    }

    const handleOpenPress = (item) => {
        setSelectedProduct(item)
        bottomSheetRef.current?.expand();
    }

    return (
        <SafeAreaView className="flex-1 bg-[#ffffff] p-[20%]">
            <View className="flex-1">
                <View className="flex-row items-center justify-between">
                    <View></View>
                    <View className="flex-row items-center justify-between gap-2">
                        <Text className="text-[20px] font-poppins text-[#000]">Market Place</Text>
                    </View>
                    <View className="p-[3%] rounded-[50px]">
                        <View className="bg-[#0452df] rounded-full w-5 h-5 flex items-center justify-center absolute top-1 right-2.5 z-10">
                            <Text className="text-[10px] text-white font-[500] font-inter">0</Text>
                        </View>
                        <EvilIcons name="cart" size={25} color="#000000" />
                    </View>
                </View>

                <View className="mt-[3%] flex-row items-center justify-center gap-2">
                    <TextInput
                        placeholder="Search"
                        className="w-[80%] py-4 px-3 rounded-[10px] bg-[#ffffff] border border-2 border-[#F0F0F0]"
                        id="search"
                        type="text"
                        autoCapitalize="none"
                        placeholderTextColor="#777"
                    />
                    <TouchableOpacity className="p-3 rounded-[10px] bg-[#ffffff] border border-2 border-[#F0F0F0]">
                        <Feather name="sliders" size={25} color="#000000ff" />
                    </TouchableOpacity>
                </View>

                <View className="mt-4 px-2">
                    <FlatList
                        data={[
                            { id: 1, text: 'All', icon: all },
                            { id: 2, text: 'Books', icon: book },
                            { id: 3, text: 'Electronics', icon: elec },
                            { id: 4, text: 'Furniture', icon: furn },
                            { id: 5, text: 'Clothes', icon: cloth },
                            { id: 6, text: 'Hostel Essentials', icon: essensial },
                        ]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ gap: 10 }}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View className="flex justify-center items-center">
                                <Image
                                    source={item.icon}
                                    className="w-[80%] h-[7vh]"
                                    resizeMode="contain"
                                />
                                <Text numberOfLines={1} ellipsizeMode="tail" className="text-[10px] text-center text-[#000] w-[55px] font-poppins-medium">{item.text}</Text>
                            </View>
                        )}
                    />
                </View>

                <View className="mt-[5%] mb-[3%]">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-[18px] font-[600] text-[#000]">Popular Near You</Text>
                        <Text className="text-[12px] font-[500] font-inter text-[#0452df] font-semibold">View All</Text>
                    </View>
                </View>

                <View>
                    <FlatList
                        data={product}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        columnWrapperStyle={{
                            justifyContent: "space-between",
                            marginBottom: 10,
                        }}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleOpenPress(item)} className={`w-[45%] rounded-[5px]`}>
                                <View className='bg-[#e0e0e0ff] w-full h-[13vh] rounded-t-md items-center justify-center'>
                                    <View className='px-[2.5%] py-[2.5%] mt-1 rounded-[5px] bg-[#0452df] absolute top-1 left-2.5 z-10'>
                                        <Ionicons name="shield-checkmark" size={15} color="#ffffffff" />
                                    </View>
                                    <View className='w-[50%] h-[15vh]'>
                                        <Image
                                            source={item.img}
                                            className="w-[100%] h-[100%]"
                                            resizeMode="contain"
                                        />
                                    </View>
                                </View>
                                <View className='px-2'>
                                    <Text className="text-[12px] text-[#000] font-poppins-medium mt-2">{item.text}</Text>
                                    <Text className="text-[10px] text-[#000] font-poppins-medium mt-1">{item.price}</Text>
                                    <View className='flex-row justify-between items-center'>
                                        <Text className="text-[8px] text-[#878787ff] font-poppins-medium">{item.distance}</Text>
                                        <Ionicons name="heart-outline" size={15} color="#000000" />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <View className="flex-row bg-[#000000] px-5 py-1 rounded-[10px] mt-1">
                    <View className="w-[50%] justify-center">
                        <Text className="text-[15px] font-[500] font-inter font-semibold text-[#FFF]">Sell what you don't need</Text>
                        <Text className="text-[12px] font-[500] font-inter font-semibold text-[#FFF]">Find someone who does</Text>
                        <TouchableOpacity className="bg-white py-[8px] rounded-[5px] mt-2 w-[60%]">
                            <Text className="text-[12px] font-[500] text-center font-inter text-[#000000]">List an Item</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="w-[100%] flex-1 justify-center">
                        <Image
                            source={bob}
                            className="w-[100%] h-[10vh]"
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>

            <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
                <BottomSheetView className='p-2'>
                    <View className='bg-[#e0e0e0ff] w-full h-[20vh] rounded-t-md items-center justify-center'>
                        <View className='px-[2.5%] py-[2.5%] mt-1 rounded-[5px] bg-[#0452df] absolute top-1 left-2.5 z-10'>
                            <Ionicons name="shield-checkmark" size={15} color="#ffffffff" />
                        </View>
                        <View className='w-[80%] h-[20vh]'>
                            <Image
                                source={selectedProduct?.img}
                                className="w-[100%] h-[100%]"
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                    <View className='px-3'>
                        <Text className="text-[14px] text-[#000] font-poppins-medium mt-2">{selectedProduct?.text}</Text>
                        <View className='flex-row justify-between items-center pr-2'>
                            <Text className="text-[12px] text-[#000] font-poppins-medium mt-1">{selectedProduct?.price}</Text>
                            <Ionicons name="heart-outline" size={15} color="#000000" />
                        </View>
                        <Text className="w-[60%] text-[10px] text-[#878787ff] font-poppins-medium mt-1">{selectedProduct?.desc}</Text>
                    </View>
                    <View className='mt-2 px-3'>
                        <View className='flex-row justify-between items-start px-2'>
                            <View className='flex-row items-center h-[10vh]'>
                                <View className='w-[90px] h-[90px] flex justify-center'>
                                    <Image
                                        source={propic}
                                        className="w-[70%] h-[70%] rounded-[50px]"
                                        resizeMode="objeect-fit"
                                    />
                                </View>
                                <View className='relative left-[-8px]'>
                                    <Text className='text-[14px]'>Amanda Brook</Text>
                                    <Text className='text-[12px] mt-2'>CS * 3rd Year</Text>
                                    <Text className='text-[10px]'>⭐️ 4.8</Text>
                                </View>
                            </View>
                            <Ionicons name="shield-checkmark" size={15} color="#0452df" />
                        </View>
                        <View className='flex-row items-center gap-1 mt-5'>
                            <EvilIcons name="location" size={20} color="#0452df" />
                            <Text className='text-[12px]'>2.4km away from you</Text>
                        </View>
                        <View className='flex-row gap-2 mt-2'>
                            <TouchableOpacity className="bg-white py-[8px] rounded-[5px] mt-2 w-[30%] border border-1 border-[#0452df]">
                                <Text className="text-[12px] font-[500] text-center font-inter text-[#0452df]">Chat</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-[#0452df] py-[8px] rounded-[5px] mt-2 w-[30%]">
                                <Text className="text-[12px] font-[500] text-center font-inter text-[#ffffff]">Make Offer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </SafeAreaView>
    )
}

export default Market;