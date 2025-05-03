import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  PanResponder,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { RoutineCard } from "./RoutineCard";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type RoutineItem = {
  id: string;
  label: string;
  onPress?: () => void;
};

type DraggableRoutineListProps = {
  items: RoutineItem[];
  onReorder?: (items: RoutineItem[]) => void;
};

export const DraggableRoutineList: React.FC<DraggableRoutineListProps> = ({
  items: initialItems,
  onReorder,
}) => {
  const [items, setItems] = useState(initialItems);
  const [draggingIdx, setDraggingIdx] = useState<number | null>(null);
  
  const itemHeight = 70;
  const animatedY = useRef(new Animated.Value(0)).current;
  const animatedScale = useRef(new Animated.Value(1)).current;
  const animatedOpacity = useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const startDragging = (index: number) => {
    setDraggingIdx(index);
    
    Animated.parallel([
      Animated.spring(animatedScale, {
        toValue: 1.03,
        useNativeDriver: true,
      }),
      Animated.spring(animatedOpacity, {
        toValue: 0.9,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const moveItem = (dy: number) => {
    if (draggingIdx === null) return;
    
    animatedY.setValue(dy);
    
    const currentPosition = draggingIdx * itemHeight + dy;
    const newIndex = Math.max(0, Math.min(items.length - 1, Math.round(currentPosition / itemHeight)));
    
    if (newIndex !== draggingIdx) {
      const newItems = [...items];
      const [movedItem] = newItems.splice(draggingIdx, 1);
      newItems.splice(newIndex, 0, movedItem);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setItems(newItems);
      setDraggingIdx(newIndex);
    }
  };

  const endDragging = () => {
    if (draggingIdx === null) return;
    Animated.parallel([
      Animated.spring(animatedY, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.spring(animatedScale, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.spring(animatedOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
    
    setDraggingIdx(null);
    if (onReorder) {
      onReorder(items);
    }
  };

  const createPanResponder = (index: number) => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 5;
      },
      onPanResponderGrant: () => {
        startDragging(index);
      },
      onPanResponderMove: (_, gestureState) => {
        moveItem(gestureState.dy);
      },
      onPanResponderRelease: () => {
        endDragging();
      },
      onPanResponderTerminate: () => {
        endDragging();
      },
    });
  };

  return (
    <View style={styles.cardsContainer}>
      {items.map((item, index) => {
        const isBeingDragged = draggingIdx === index;
        const panResponder = createPanResponder(index);
        
        return (
          <Animated.View
            key={item.id}
            {...panResponder.panHandlers}
            style={[
              {
                transform: [
                  { translateY: isBeingDragged ? animatedY : 0 },
                  { scale: isBeingDragged ? animatedScale : 1 },
                ],
                opacity: isBeingDragged ? animatedOpacity : 1,
                zIndex: isBeingDragged ? 1000 : 1,
              },
            ]}
          >
            <RoutineCard
              label={item.label}
              onPress={() => {
                if (!isBeingDragged && item.onPress) {
                  item.onPress();
                }
              }}
              style={isBeingDragged ? styles.draggingCard : undefined}
            />
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 14,
  },
  draggingCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
  },
});