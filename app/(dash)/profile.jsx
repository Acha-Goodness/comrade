import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import AccountSettings from '../../components/AccountSettings';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import propic from "@/assets/images/propic.jpg";
// import { StatusBar } from "expo-status-bar";
import { useIsFocused } from '@react-navigation/native';

const Profile = () => {
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('#121212'); // Android only
        }
    }, [isFocused]);

    return (
        <>
            <View style={{ height: "8%", backgroundColor: "#0452df" }}>
                <StatusBar barStyle="light-content" />
            </View>
            <View className="flex-1 bg-white">
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
                    {/* Profile Info */}
                    <View className='flex-row justify-between items-start px-5 pb-10 bg-[#0452df]'>
                        <View className='flex-row items-center h-[10vh]'>
                            <View className='w-[90px] h-[90px] flex justify-center'>
                                <Image
                                    source={propic}
                                    className="w-[70%] h-[70%] rounded-[50px]"
                                    resizeMode="objeect-fit"
                                />
                            </View>
                            <View className='relative left-[-8px]'>
                                <Text className='text-[20px] text-white font-poppins-medium'>Amanda Brook</Text>
                                <Text className='text-[12px] text-white'>Computer Science * 3rd Year</Text>
                                <Text className='text-[10px] text-white'>amanda_brook@university.edu</Text>
                            </View>
                        </View>
                        <View className='bg-[#97bcffff] w-[30px] h-[30px] rounded-full flex items-center justify-center'>
                            <FontAwesome5 name="pen" size={15} color="#ffffffff" />
                        </View>
                    </View>

                    {/* Settings List */}
                    <View className="bg-[white] mt-[-30px] px-[5%] rounded-t-[20px] w-[95%] m-auto">
                        <View className="mt-4 px-2">
                            <FlatList
                                data={[
                                    { id: 1, text: 'Listing', amt: 25 },
                                    { id: 2, text: 'Following', amt: 12 },
                                    { id: 3, text: 'Followers', amt: 48 },
                                    { id: 4, text: 'Rating', amt: 4.8 },
                                ]}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ margin: "auto", gap: 40 }}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text className="text-[20px] text-center text-[#000] font-poppins-medium">{item.amt}</Text>
                                        <Text className="text-[12px] text-center text-[##6e6e6e] font-poppins">{item.text}</Text>
                                    </View>
                                )}
                            />
                        </View>
                        {/* Preferences */}
                        <Text className="text-[16px] text-[#000000] font-poppins mt-12 mb-4">My Activity</Text>
                        <View className="gap-6">
                            <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-3">
                                <View className="flex-row items-center gap-4">
                                    <Ionicons name="notifications" size={22} color="#0452df" />
                                    <Text className="text-[15px] font-[500] text-[#0452df] font-poppins">My Listings</Text>
                                </View>
                                <Feather name="chevron-right" size={20} color="#666" />
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-3">
                                <View className="flex-row items-center gap-4">
                                    <MaterialCommunityIcons name="palette" size={22} color="#0452df" />
                                    <Text className="text-[15px] font-[500] text-[#0452df] font-poppins">My Orders</Text>
                                </View>
                                <Feather name="chevron-right" size={20} color="#666" />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setShowAccountSettings(true)}
                                className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-3"
                            >
                                <View className="flex-row items-center gap-4">
                                    <Ionicons name="person" size={22} color="#0452df" />
                                    <Text className="text-[15px] font-[500] text-[#0452df] font-poppins">Saved Items</Text>
                                </View>
                                <Feather name="chevron-right" size={20} color="#666" />
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-3">
                                <View className="flex-row items-center gap-4">
                                    <MaterialCommunityIcons name="face-man-shimmer" size={22} color="#0452df" />
                                    <Text className="text-[15px] font-[500] text-[#0452df] font-poppins">Recently Viewed</Text>
                                </View>
                                <Feather name="chevron-right" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>

                        {/* Resources */}
                        <Text className="text-[16px] text-[#000000] font-poppins mt-12 mb-4">Account</Text>
                        <View className="gap-6">
                            <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-3">
                                <View className="flex-row items-center gap-4">
                                    <Ionicons name="paper-plane" size={22} color="#0452df" />
                                    <Text className="text-[15px] font-[500] text-[#0452df] font-poppins">Settings</Text>
                                </View>
                                <Feather name="chevron-right" size={20} color="#666" />
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center justify-between border-b border-[#F4F4FB] pb-4 mt-3">
                                <View className="flex-row items-center gap-4">
                                    <MaterialIcons name="support-agent" size={22} color="#0452df" />
                                    <Text className="text-[15px] font-[500] text-[#0452df] font-poppins">Help & Support</Text>
                                </View>
                                <Feather name="chevron-right" size={20} color="#666" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Profile;