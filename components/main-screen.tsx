import React from 'react';
import { View, Text, StyleSheet, Image,ScrollView } from 'react-native';
import {COLORS} from "@/styles/theme";

import { Ionicons, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';

export default function MainScreen() {
  return (

    <ScrollView  style={styles.container}>
      <View style={styles.headerRow}>
        <Ionicons name="person-circle-outline" size={32} color={COLORS.whiteColor} />
        <Text style={styles.userName}>Charlotte</Text>
        <Feather name="chevron-right" size={26} color={COLORS.whiteColor} />
      </View>

      <View style={styles.menuRow}>
        <View style={styles.menuItem}>
          <MaterialCommunityIcons name="airplane" size={26} color={COLORS.yellowLightMid} />
          <Text style={styles.menuLabel}>Travel</Text>
        </View>
        <View style={styles.menuItem}>
          <Entypo name="box" size={26} color={COLORS.yellowLightMid} />
          <Text style={styles.menuLabel}>Delivery</Text>
        </View>
        <View style={styles.menuItem}>
          <Feather name="gift" size={26} color={COLORS.yellowLightMid} />
          <Text style={styles.menuLabel}>Bonuses</Text>
        </View>
        <View style={styles.menuItem}>
          <Feather name="headphones" size={26} color={COLORS.yellowLightMid} />
          <Text style={styles.menuLabel}>Support</Text>
        </View>
      </View>

      <View style={styles.cardsRow}>
        <View style={styles.cardOrange}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png' }} style={styles.cardIcon} />
          <Text style={styles.cardAmount}>$4,098.12</Text>
          <Text style={styles.cardType}>Debit • 4385</Text>
        </View>

        <View style={styles.cardGray}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png' }} style={styles.cardIcon} />
          <Text style={styles.cardAmount}>$14.71</Text>
          <Text style={styles.cardType}>Virtual • 9081</Text>
        </View>
      </View>

      <View style={styles.expensesRow}>
        <Text style={styles.expensesTitle}>Expenses in <Text style={{ color: COLORS.yellowLightMid }}>June</Text></Text>
        <Text style={styles.expensesValue}>$5,091</Text>
      </View>

      <View style={styles.gradientBarContainer}>
        <View style={[styles.gradientSegment, { backgroundColor: COLORS.yellowDark }]} />
        <View style={[styles.gradientSegment, { backgroundColor: COLORS.yellowMid }]} />
        <View style={[styles.gradientSegment, { backgroundColor: COLORS.yellowLightMid }]} />
        <View style={[styles.gradientSegment, { backgroundColor: COLORS.yellowLight }]} />
      </View>

      <Text style={styles.sectionTitle}>Today</Text>

      <View style={styles.transactionItem}>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} style={styles.avatar} />
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionName}>Matthew Billson</Text>
          <Text style={styles.transactionCategory}>• Money Transfer</Text>
        </View>
        <View style={styles.transactionRight}>
          <Text style={styles.transactionAmount}>$56.19</Text>
          <Text style={styles.transactionDate}>Jun 9, 12:08</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Yesterday</Text>

      <View style={styles.transactionItem}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Starbucks_Corporation_Logo_2011.svg' }} style={styles.avatar} />
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionName}>Starbucks</Text>
          <Text style={styles.transactionCategory}>• Food</Text>
        </View>
        <View style={styles.transactionRight}>
          <Text style={styles.transactionAmount}>$122.47</Text>
          <Text style={styles.transactionDate}>Jun 8, 19:21</Text>
        </View>
      </View>

      <View style={styles.transactionItem}>
        <Image source={{ uri: 'https://seeklogo.com/images/N/netflix-logo-6A5D357BF3-seeklogo.com.png' }} style={styles.avatar} />
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionName}>Netflix</Text>
          <Text style={styles.transactionCategory}>• Entertainment</Text>
        </View>
        <View style={styles.transactionRight}>
          <Text style={styles.transactionAmount}>$13.17</Text>
          <Text style={styles.transactionDate}>Jun 8, 08:53</Text>
        </View>
      </View>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 20,
  },
  userName: {
    color: COLORS.whiteColor,
    fontSize: 20,
    fontWeight: '600',
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuLabel: {
    color: COLORS.whiteColor,
    marginTop: 6,
    fontSize: 12,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  cardOrange: {
    width: '48%',
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.yellowMid,
  },
  cardGray: {
    width: '48%',
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.grayMid,
  },
  cardIcon: {
    width: 36,
    height: 26,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardAmount: {
    color: COLORS.whiteColor,
    fontSize: 20,
    fontWeight: '700',
  },
  cardType: {
    color: COLORS.grayLight,
    marginTop: 4,
  },
  expensesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  expensesTitle: {
    color: COLORS.whiteColor,
    fontSize: 18,
    fontWeight: '600',
  },
  expensesValue: {
    color: COLORS.whiteColor,
    fontSize: 18,
  },
  gradientBarContainer: {
    flexDirection: 'row',
    height: 8,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 10,
  },
  gradientSegment: {
    flex: 1,
  },
  sectionTitle: {
    color: COLORS.grayLight,
    marginTop: 25,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionName: {
    color: COLORS.whiteColor,
    fontSize: 16,
    fontWeight: '600',
    },
    transactionCategory: {
        color: '#aaa',
        fontSize: 12,
    },
    transactionAmount: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'right',
    },
    transactionDate: {
        color: '#777',
        fontSize: 12,
        textAlign: 'right',
    },
    transactionRight: {
        // color:COLORS.error,
    },
});
