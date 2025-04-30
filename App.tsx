import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Image, Linking, TextStyle,TouchableOpacity, TextInput, SafeAreaView, ScrollView  } from 'react-native';
import { useState }from 'react';
import { NavigationContainer, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "HomePage" component={HomePage} />
        <Stack.Screen name ="Six-Month Courses" component ={SixMonth} />
    <Stack.Screen name = "Six-Week Courses" component={SixWeek} 
    />
    <Stack.Screen name = "First-Aid" component={FirstAid} />
    <Stack.Screen name="Sewing" component={Sewing}/>
    <Stack.Screen name= "Landscaping" component={Landscaping}/>
    <Stack.Screen name= "Life-Skills" component={LifeSkills}/>
    <Stack.Screen name="Child Minding" component={ChildMinding}/>
    <Stack.Screen name= "Cooking" component={Cooking}/>
    <Stack.Screen name="Garden Maintenance" component={GardenMaintenance}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomePage({navigation}){
  const [SixMonth, setSixMonth] = useState('');
  const[ SixWeek, setSixWeek] = useState('');
  const [ViewDiscounts, setViewDiscounts] = useState('');

  const [selectedValue, setSelectedValue] = useState('0');


  return(
    <View style={styles.container}>
      <View style ={styles.headerContainer}>
     <Image
        source={require('./assets/xhaw logo.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Empowering The Nation</Text>
</View>
<View style={styles.spacer}>
  </View>
       <Text style={styles.aboutText}>About Us</Text>
       <View style={styles.spacer}>
  </View>

    
    <View style={styles.box}>
    <Text style={{fontWeight:'bold',fontFamily:'sans-serif', color:'black',padding: 20, fontSize:25, justifyContent:'center',textAlign:'auto',}}>Empowering the nation was established in 2012 and offers courses in Johnannesburg.
      Hundreds of Domestic workers and Gardeners have trained on both 6 month and 6 week programmes and can provide more marketable skills.
    </Text>
    <StatusBar backgroundColor='#3871C1'/>
    </View>
  <View style={styles.spacer}>
  </View>
    <Text style={styles.aboutText}>Courses On Offer</Text>
    

    
  <View style={styles.mtext}>
    <View style={styles.headerContainer}>
    <Image
        source={require('./assets/grad1.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<TouchableOpacity style={styles.monthText} onPress={()=> navigation.navigate('Six-Month Courses')}>
      <Text style={styles.monthText}>Summary on six-month courses</Text>
    </TouchableOpacity>
    </View>
  
  <View style={styles.headerContainer}>
  <Image
        source={require('./assets/grad2.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
    <TouchableOpacity style={styles.monthText} onPress={()=> navigation.navigate('Six-Week Courses')}>
      <Text style={styles.monthText}>Summary on six-week courses</Text>
    </TouchableOpacity>
    </View>
</View>


</View>
   
  
  
   
  )
}


function SixMonth({navigation}){
const [FirstAid, setFirstAid]= useState('');
const [Sewing, setSewing]= useState('');
const [Landscaping, setLandscaping]= useState('');
const [LifeSkills, setLifeSkills]= useState('');
const [DiscountSummary, setDiscountSummary]=useState('');

return(
  <View style={styles.SixMonthcontainer}>
    <View style={styles.headerContainer}>
    <Image
        source={require('./assets/xhaw logo.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Empowering The Nation</Text>
    </View>
   
    <Text style={styles.sumText}>Six-Month Courses</Text>
    <View style={styles.spacer}>
    </View>

    <View style={styles.headerContainer}>
  <Image
        source={require('./assets/first aid.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style = {styles.aidText} onPress={()=> navigation.navigate('First-Aid')}>
      <Text style={styles.monthText}>First-Aid</Text>
      </TouchableOpacity>
      <View style={styles.spacer}>
      </View>
</View>

      <View style={styles.headerContainer}>
  <Image
        source={require('./assets/sewing.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.sewtext} onPress={()=> navigation.navigate('Sewing')}>
      <Text style={styles.sewtext}>Sewing</Text>
      </TouchableOpacity>
      <View style={styles.spacer}>
      </View>
      </View>

      <View style={styles.headerContainer}>
  <Image
        source={require('./assets/landscaping.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.aidText} onPress={()=> navigation.navigate('Landscaping')}>
      <Text style={styles.sewtext}>Landscaping</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
  <Image
        source={require('./assets/life skills.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.aidText} onPress={()=> navigation.navigate('Life-Skills')}>
      <Text style={styles.sewtext}>Life Skills</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.spacer}>
    </View>
    <Text style={styles.distext}> Discount Summary</Text>
    <View style={styles.spacer}>
    </View>
    <View style={styles.discountImage}>
  <Image style={styles.discountImage}
        source={require('./assets/discounts.png')} //logo and header title
       
      />
      </View>
</View>



  
)
}






function SixWeek({navigation}){
  const [FirstAid, setFirstAid]= useState('');
  const [Sewing, setSewing]= useState('');
  const [Landscaping, setLandscaping]= useState('');
  const [LifeSkills, setLifeSkills]= useState('');
  const [DiscountSummary, setDiscountSummary]=useState('');
  
  return(
    <View style={styles.SixWeekcontainer}>
      <View style={styles.headerContainer}>
      <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      </View>
     
      <Text style={styles.sumText}>Six-Week Courses</Text>
      <View style={styles.spacer}>
      </View>
      <View style={styles.headerContainer}>
    <Image
          source={require('./assets/child minding.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.aboutText} onPress={()=> navigation.navigate('Child Minding')}>
          <Text style = {styles.aidText}>Child Minding</Text>
        </TouchableOpacity>
        <View style={styles.spacer}>
        </View>
  </View>
  
        <View style={styles.headerContainer}>
    <Image
          source={require('./assets/cooking.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.sewtext}>Cooking</Text>
        </View>
        <View style={styles.headerContainer}>
    <Image
          source={require('./assets/garden maintenance.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.sewtext}>Garden Maintenance</Text>
        </View>
   
        
        <View style={styles.spacer}>
      </View>
      <Text style={styles.distext}> Discount Summary</Text>
      <View style={styles.spacer}>
      </View>
      <View style={styles.discountImage}>
    <Image style={styles.discountImage}
          source={require('./assets/discounts.png')} //logo and header title
         
        />
        </View>
  </View>
  
    
  )
}


function FirstAid({navigation}){
  
return(
  <View style={styles.FirstAidcontainer}>
    <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.headerContainer}>
      <Image
        source={require('./assets/first aid.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<Text style={styles.distext}>First-Aid</Text>
</View>
<View style={styles.spacer}></View>
<Text style={styles.distext}>Purpose</Text>
<View style={styles.spacer}></View>
<View style={styles.FirstAidbox}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:15, fontFamily:'sans-serif'}}>To provide first aid awareness and basic life support</Text>
</View>
<View style={styles.spacer}></View>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Content:</Text>

<Text style={styles.sewtext}>-Wounds and Bleeding</Text>

<Text style={styles.sewtext}>-Burns and Fractures</Text>

<Text style={styles.sewtext}>-Emergency scene management</Text>

<Text style={styles.sewtext}>-Cardio Respirartory Resuscination</Text>

<Text style={styles.sewtext}>-Respiratory distress e.g , choking</Text>
<View style={styles.spacer}></View>

<View style={styles.FirstAidbox}>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R1500</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.Buttoncontainer}>
<Button title="Select Course" color="#F8A72A"/>
<Button title="View Next" color='#F8A72A' onPress={()=> navigation.navigate('Sewing')}/>
    </View>
    </View>
  
)
}

function Sewing({navigation}){
  return(
<View style={styles.Sewingcontainer}>
    <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.headerContainer}>
      <Image
        source={require('./assets/sewing.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<Text style={styles.distext}>Sewing</Text>
</View>
<View style={styles.spacer}></View>
<Text style={styles.distext}>Purpose</Text>
<View style={styles.spacer}></View>
<View style={styles.FirstAidbox}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:15, fontFamily:'sans-serif'}}>To provide alterations and new garment tailoring services</Text>
</View>
<View style={styles.spacer}></View>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Content:</Text>

<Text style={styles.sewtext}>-Types of stitches</Text>

<Text style={styles.sewtext}>-Threadong a sewing machine</Text>

<Text style={styles.sewtext}>-Sewing buttons, hems, zips and seams</Text>

<Text style={styles.sewtext}>-Alterations</Text>

<Text style={styles.sewtext}>-Design and sewing new garments</Text>
<View style={styles.spacer}></View>

<View style={styles.FirstAidbox}>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R1500</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.SewingButtoncontainer}>
<Button title="Select Course" color="#F8A72A" />
<Button title="View Next" color='#F8A72A'onPress={()=> navigation.navigate('Landscaping')}/>
    </View>
    </View>
  )
}

function Landscaping({navigation}){
  return(
<View style={styles.Landscapingcontainer}>
    <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.headerContainer}>
      <Image
        source={require('./assets/landscaping.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<Text style={styles.distext}>Landscaping</Text>
</View>
<View style={styles.spacer}></View>
<Text style={styles.distext}>Purpose</Text>
<View style={styles.spacer}></View>
<View style={styles.FirstAidbox}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:15, fontFamily:'sans-serif'}}>To provide lanscaping services for new and established gardens</Text>
</View>
<View style={styles.spacer}></View>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Content:</Text>

<Text style={styles.sewtext}>-Indigenous and exotic plants and trees</Text>

<Text style={styles.sewtext}>-Fixed structures</Text>

<Text style={styles.sewtext}>-Aesthetics of plant shapes and colours</Text>

<Text style={styles.sewtext}>-Garden layout</Text>

<Text style={styles.sewtext}>-Balancing of plants and trees in the garden</Text>
<View style={styles.spacer}></View>

<View style={styles.FirstAidbox}>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R1500</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.LandscapingButtoncontainer}>
<Button title="Select Course" color="#F8A72A"/>
<Button title="View Next" color='#F8A72A'onPress={()=> navigation.navigate('Life-Skills')}/>
    </View>
    </View>
  )
}

function LifeSkills({navigation}){
  return(
<View style={styles.LifeSkillscontainer}>
    <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.headerContainer}>
      <Image
        source={require('./assets/life skills.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<Text style={styles.distext}>Life-Skills</Text>
</View>
<View style={styles.spacer}></View>
<Text style={styles.distext}>Purpose</Text>
<View style={styles.spacer}></View>
<View style={styles.FirstAidbox}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:15, fontFamily:'sans-serif'}}>To provide skills to navigate basic life necessities</Text>
</View>
<View style={styles.spacer}></View>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Content:</Text>

<Text style={styles.sewtext}>-Opening a bank account</Text>

<Text style={styles.sewtext}>-Basic labor law</Text>

<Text style={styles.sewtext}>-Basic reading and writing literacy</Text>

<Text style={styles.sewtext}>-Basic Numeric literacy</Text>


<View style={styles.spacer}></View>

<View style={styles.FirstAidbox}>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R1500</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.Buttoncontainer}>
<Button title="Select Course" color="#F8A72A"/>
<Button title="HomePage" color='#F8A72A' onPress={()=> navigation.navigate('HomePage')}/>
    </View>
    </View>
  )
}
function ChildMinding({navigation}){
  return(
    <View style={styles.ChildMindingcontainer}>
    <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.headerContainer}>
      <Image
        source={require('./assets/life skills.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<Text style={styles.distext}>Child Minding</Text>
</View>
<View style={styles.spacer}></View>
<Text style={styles.distext}>Purpose</Text>
<View style={styles.spacer}></View>
<View style={styles.FirstAidbox}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:15, fontFamily:'sans-serif'}}>To provide basic child and baby care</Text>
</View>
<View style={styles.spacer}></View>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Content:</Text>

<Text style={styles.sewtext}>-Birth to six month and baby needs</Text>

<Text style={styles.sewtext}>-Seven-month to one year old needs</Text>

<Text style={styles.sewtext}>-Toddler needs</Text>

<Text style={styles.sewtext}>-Educational toys</Text>


<View style={styles.spacer}></View>

<View style={styles.FirstAidbox}>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R1500</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.ChildMindingButtoncontainer}>
<Button title="Select Course" color="#F8A72A"/>
<Button title="View Next" color='#F8A72A' onPress={()=> navigation.navigate('Cooking')}/>
    </View>
    </View>
  )
}
function Cooking({navigation}){
  return(
<View style={styles.cookingcontainer}>
    <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.headerContainer}>
      <Image
        source={require('./assets/life skills.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<Text style={styles.distext}>Cooking</Text>
</View>
<View style={styles.spacer}></View>
<Text style={styles.distext}>Purpose</Text>
<View style={styles.spacer}></View>
<View style={styles.FirstAidbox}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:15, fontFamily:'sans-serif'}}>To provide skills to navigate basic life necessities</Text>
</View>
<View style={styles.spacer}></View>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Content:</Text>



<Text style={styles.sewtext}>-Types of protein, carbohydrates and vegetables </Text>

<Text style={styles.sewtext}>-Tasty and nutritious meals</Text>

<Text style={styles.sewtext}>-Preparation and cooking meals </Text>


<View style={styles.spacer}></View>

<View style={styles.FirstAidbox}>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R1500</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.cookingButtoncontainer}>
<Button title="Select Course" color="#F8A72A"/>
<Button title="View Next" color='#F8A72A' onPress={()=> navigation.navigate('Garden Maintenance')}/>
    </View>
    </View>
  )
}

function GardenMaintenance({navigation}){
  return(
<View style={styles.GardenMaintenancecontainer}>
    <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.headerContainer}>
      <Image
        source={require('./assets/garden maintenance.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<Text style={styles.distext}>Garden Maintenance</Text>
</View>
<View style={styles.spacer}></View>
<Text style={styles.distext}>Purpose</Text>
<View style={styles.spacer}></View>
<View style={styles.FirstAidbox}>
  <Text style={{color:'black',fontWeight:'bold',fontSize:15, fontFamily:'sans-serif'}}>To provide skills to navigate basic life necessities</Text>
</View>
<View style={styles.spacer}></View>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Content:</Text>



<Text style={styles.sewtext}>-Water restictions and watering requirements of indigenous and exotic plants </Text>

<Text style={styles.sewtext}>-Pruning and propagation of plants</Text>

<Text style={styles.sewtext}>-Planting techniques for different plant types</Text>


<View style={styles.spacer}></View>

<View style={styles.FirstAidbox}>
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R1500</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.GardenMaintenanceButtoncontainer}>
<Button title="Select Course" color="#F8A72A"/>
<Button title="HomePage" color='#F8A72A' onPress={()=> navigation.navigate('HomePage')}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3871C1',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  SixMonthcontainer: {
    flex: 1,
    backgroundColor: '#65A4CF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  aboutText:{
    color: 'Black',
fontSize: 30,
fontWeight: 'bold',
fontFamily: 'serif',
  },
  box:{
    width:350,
    height:350,
    backgroundColor:'#9DB0CA',
    justifyContent:'center',
    alignItems: 'center',
    textAlign:'center',
    borderColor:'#'
},
spacer:{
  height: 50, // this will create space between components
},
monthText:{
color: 'white',
fontSize: 25,
fontWeight: 'bold',
fontFamily: 'sans-serif',
},
mtext:{
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
},
swtext:{
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
},
weekText:{
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
},
viewText:{
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
},
logo: {
  width: 40,
  height: 40,
  marginRight: 10,
  flexDirection: 'row',
},
title: {
  fontSize: 35,
  fontWeight: 'bold',
  fontFamily:'serif',
  position:'relative',
  top: 2,
},
headerContainer:{
  flexDirection: 'row',        // Puts items side by side
  alignItems: 'center',        // Vertically aligns items in center
  padding: 10,
  
},
aidText:{
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  fontFamily: 'sans-serif', 
}, 
sumText:{
  color: 'Black',
  fontSize: 27,
  fontWeight: 'bold',
  fontFamily: 'serif', 
},
sewtext:{
  color: 'white',
  fontSize: 25,
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
},
discountImage:{
  width: 350,
  height: 450,
},
distext:{
  color: 'Black',
  fontSize: 27,
  fontWeight: 'bold',
  fontFamily: 'serif',  
},
SixWeekcontainer: {
  flex: 1,
  backgroundColor: '#F4A72B',
  alignItems: 'center',
  justifyContent: 'center',
},
FirstAidcontainer: {
  flex: 1,
  backgroundColor: '#3970C0',
  alignItems: 'center',
  justifyContent: 'center',
},Sewingcontainer: {
  flex: 1,
  backgroundColor: '#65A4CF',
  alignItems: 'center',
  justifyContent: 'center',
},
Landscapingcontainer: {
  flex: 1,
  backgroundColor: '#4FAFEB',
  alignItems: 'center',
  justifyContent: 'center',
},
LifeSkillscontainer: {
  flex: 1,
  backgroundColor: '#3970C0',
  alignItems: 'center',
  justifyContent: 'center',
},
FirstAidbox:{
  width:350,
  height:100,
  backgroundColor:'#9DB0CA',
  justifyContent:'center',
  alignItems: 'center',
  textAlign:'center',
  borderColor:'#'
},

Buttoncontainer: {
  flexDirection: 'row',
  backgroundColor: '#3970C0',
  justifyContent:'space-between',
  gap:10


},
SewingButtoncontainer: {
  flexDirection: 'row',
  backgroundColor: '#65A4CF',
  justifyContent:'space-between',
  gap:10


},
LandscapingButtoncontainer: {
  flexDirection: 'row',
  backgroundColor: '#4FAFEB',
  justifyContent:'space-between',
  gap:10


},
LifeskillsButtoncontainer: {
  flexDirection: 'row',
  backgroundColor:  '#3970C0',
  justifyContent:'space-between',
  gap:10


},

ChildMindingcontainer: {
  flex: 1,
  backgroundColor:  '#AAC8EA',
  alignItems: 'center',
  justifyContent: 'center',
 


},
cookingButtoncontainer: {
  flexDirection: 'row',
  backgroundColor:  '#65A4CF',
  justifyContent:'space-between',
  gap:10


},
ChildMindingButtoncontainer: {
  flexDirection: 'row',
  backgroundColor:  '#AAC8EA',
  justifyContent:'space-between',
  gap:10


},
cookingcontainer: {
  flex:1,
  backgroundColor: '#65A4CF',
  alignItems: 'center',
  justifyContent: 'center',
  


},
GardenMaintenanceButtoncontainer: {
  flexDirection: 'row',
  backgroundColor:  '#9CB0C9',
  justifyContent:'space-between',
  gap:10


},
GardenMaintenancecontainer: {
  flex:1,
  backgroundColor:  '#9CB0C9',
  justifyContent:'center',
  alignItems: 'center',
  


}
});
