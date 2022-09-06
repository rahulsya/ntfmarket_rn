import {View, Text, FlatList, Image, StatusBar} from 'react-native';
import React from 'react';
import {styles} from '../../styles/Homestyles';
import Header from '../../components/Header';
import Button from '../../components/Button';
import NotifIC from '../../../assets/icons/notification.svg';
import SearchIC from '../../../assets/icons/search-normal.svg';
import {colors} from '../../styles/globals/colors';
import {Categories, ProductItem, SectionTitle} from '../../components';
import {items, sales} from '../../data/items';
import {normalize} from '../../styles/globals/fonts';

const Home = ({navigation}) => {
  const structure = [
    {
      id: 1,
      key: 'header',
    },
    {
      id: 2,
      key: 'categories',
    },
    {
      id: 3,
      key: 'products',
    },
    {
      key: 4,
      key: 'sales',
    },
  ];

  const renderHeader = () => {
    return (
      <View style={styles.PH}>
        <Header
          leftComponent={
            <>
              <Image source={require('../../../assets/images/logo.png')} />
              <Text style={styles.textHeader}>8.42 ETH</Text>
            </>
          }
          rightComponents={
            <>
              <Button type="has-icon" icon={<SearchIC />} />
              <View style={{width: 15}} />
              <Button type="has-icon" icon={<NotifIC />} />
            </>
          }
        />
      </View>
    );
  };

  const renderCategories = () => {
    return (
      <View style={styles.PH}>
        <SectionTitle title="Categories" />
        <Categories />
      </View>
    );
  };
  const renderProducts = () => {
    return (
      <>
        <View style={[styles.PH, {paddingBottom: normalize(24)}]}>
          <SectionTitle title="Featured NFTs" />
        </View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={items}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      </>
    );
  };
  const renderSales = () => {
    return (
      <View style={styles.PH}>
        <SectionTitle title="Top Sallers" />
        <FlatList
          data={sales}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  };

  const renderContent = ({item}) => {
    switch (item.key) {
      case 'header':
        return renderHeader();
      case 'categories':
        return renderCategories();
      case 'products':
        return renderProducts();
      case 'sales':
        return renderSales();
      default:
        return <></>;
    }
  };

  return (
    <>
      <StatusBar backgroundColor={colors.lightGrey} />
      <FlatList
        style={styles.container}
        data={structure}
        keyExtractor={item => item.id}
        renderItem={renderContent}
      />
    </>
  );
};

export default Home;
