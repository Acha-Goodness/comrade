import { Link } from "expo-router";
import { useRef, useState, useEffect } from "react";
import { View, Text, FlatList, Image, Dimensions, Pressable, ImageBackground } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get("window");

const slides = [
    {
        id: "1",
        title: "An investment in knowledge pays the best interest.",
        subtitle: "Benjamin Franklin",
        image: require("../assets/images/slide1.png"),
    },
    {
        id: "2",
        title: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        subtitle: "Mahatma Gandhi",
        image: require("../assets/images/slide2.png"),
    },
    {
        id: "3",
        title: "The future belongs to those who believe in the beauty of their dreams.",
        subtitle: "Eleanor Roosevelt",
        image: require("../assets/images/slide3.png"),
    },
    {
        id: "4",
        title: "The best way to predict the future is to create it.",
        subtitle: "Peter Drucker",
        image: require("../assets/images/slide4.png"),
    },
    {
        id: "5",
        title: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        subtitle: "Benjamin Franklin",
        image: require("../assets/images/slide2.png"),
    },
    {
        id: "6",
        title: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        subtitle: "Winston Churchill",
        image: require("../assets/images/slide3.png"),
    },
    {
        id: "7",
        title: "The mind is not a vessel to be filled, but a fire to be kindled.",
        subtitle: "Plutarch",
        image: require("../assets/images/slide4.png"),
    },
    {
        id: "8",
        title: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
        subtitle: "Malcolm X",
        image: require("../assets/images/slide2.png"),
    },
    {
        id: "9",
        title: "You don't have to be great to start, but you have to start to be great.",
        subtitle: "Zig Ziglar",
        image: require("../assets/images/slide3.png"),
    },
    {
        id: "10",
        title: "The beautiful thing about learning is that no one can take it away from you.",
        subtitle: "B.B. King",
        image: require("../assets/images/slide2.png"),
    },
];

// Add duplicate for infinite loop
const infiniteSlides = [...slides, { ...slides[0], id: "1-duplicate" }];

export default function OnboardingSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    // Keep a ref so the single stable interval always sees the latest index
    const activeIndexRef = useRef(0);
    // Guard: only call scroll methods after the FlatList has laid out
    const isReadyRef = useRef(false);

    // Scroll helper — uses offset instead of index so it never throws
    const scrollTo = (index, animated = true) => {
        flatListRef.current?.scrollToOffset({ offset: index * width, animated });
    };

    // Single stable auto-scroll interval — no stale-closure problem
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isReadyRef.current || !flatListRef.current) return;

            const next = activeIndexRef.current + 1;

            if (next < infiniteSlides.length) {
                scrollTo(next, true);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []); // ← empty dep array: created once, never recreated

    // Handle infinite-loop reset when we land on the duplicate last slide
    useEffect(() => {
        if (activeIndex === infiniteSlides.length - 1) {
            const timeout = setTimeout(() => {
                scrollTo(0, false);
                setActiveIndex(0);
                activeIndexRef.current = 0;
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [activeIndex]);

    const onScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
        activeIndexRef.current = index;
    };

    return (
        <View className="flex-1 py-[5%]">
            {/* Static Header with Logo and Dots */}
            <View className="px-6 mb-4">
                <Text className="text-white text-2xl font-bold">
                    Comrade™
                </Text>

                {/* Dots Indicator - Moved below Logo */}
                <View className="flex-row mt-2 space-x-1">
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            className={`h-1.5 rounded-full ml-[2px] ${(activeIndex % slides.length) === index
                                ? "w-2 bg-[#0452df]"
                                : "w-1.5 bg-white"
                                }`}
                        />
                    ))}
                </View>
            </View>

            {/* Scrolling Content */}
            <FlatList
                ref={flatListRef}
                data={infiniteSlides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                keyExtractor={(item) => item.id}
                getItemLayout={(_, index) => ({
                    length: width,
                    offset: width * index,
                    index,
                })}
                onLayout={() => { isReadyRef.current = true; }}
                renderItem={({ item }) => (
                    <View style={{ width }} className="flex-1">
                        {/* Text Content */}
                        <View className="mt-4 px-6">
                            <Text className="text-white text-[36px] font-medium leading-tight tracking-tight">
                                {item.title}
                            </Text>
                            <Text className="text-white font-inter text-base mt-4 leading-6">
                                {item.subtitle}
                            </Text>
                        </View>
                        <ImageBackground
                            source={item.image}
                            resizeMode="contain"
                            className="px-6 h-[50%] w-full"
                        />
                    </View>
                )}
            />

            {/* Static Footer */}
            <View className="px-6 mb-6 pt-4 absolute -bottom-5 w-full">
                <Text className="text-white mb-3 text-base font-[600]">
                    Already have an account?{" "}
                    <Link href="/login">
                        <Text className="text-[#fea01c] font-[600]">
                            Log in
                        </Text>
                    </Link>
                </Text>

                <Pressable className="bg-white py-4 rounded-full shadow-lg active:opacity-90">
                    <Link href="/signup">
                        <Text className="text-center text-[#1a0b2e] font-bold text-lg">
                            Sign Up
                        </Text>
                    </Link>
                </Pressable>
            </View>
        </View>
    );
}
