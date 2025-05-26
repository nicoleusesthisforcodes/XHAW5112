import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Image, Linking, TextStyle,TouchableOpacity, TextInput, SafeAreaView, ScrollView, FlatList, Dimensions} from 'react-native';
import { useState }from 'react';
import { NavigationContainer, useScrollToTop } from '@react-navigation/native';
import { NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';
import MapView, {Marker} from 'react-native-maps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
      animation: 'slide_from_right', // or 'slide_from_right', 'slide_from_bottom' or 'fade' //animations for the app
    }}
  >
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
    <Stack.Screen name="Calculate Fees" component={CalculateFees}/>
    <Stack.Screen name="Contact Us" component={Contact}/>
    <Stack.Screen name="Select Courses" component={SelectCourse}/>
    <Stack.Screen name="Thank You" component={ThankYou}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};


function HomePage({navigation}){
  
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

    
    <View style={styles.box}> {/*box dispalyed that will contain the About Us information*/}
    <Text style={{fontWeight:'bold',fontFamily:'sans-serif', color:'black',padding: 20, fontSize:25, justifyContent:'center',textAlign:'auto',}}>Empowering the nation was established in 2012 and offers courses in Johnannesburg.
      Hundreds of Domestic workers and Gardeners have trained on both 6 month and 6 week programmes and can provide more marketable skills.
    </Text>
    <StatusBar backgroundColor='#3871C1'/>
    </View>
  <View style={styles.spacer}>
  </View>
    <Text style={styles.aboutText}>Courses On Offer</Text>
    

    
  <View style={styles.mtext}> {/*text for homepage*/}
    <View style={styles.headerContainer}>
    <Image
        source={require('./assets/grad1.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
<TouchableOpacity style={styles.monthText} onPress={()=> navigation.navigate('Six-Month Courses')}> {/*this ensure that the user is able to navigate to the screens*/}
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
    <View style={styles.spacer}></View>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Contact Us')}>
    <Text style={styles.buttonText}>CONTACT US</Text>
    </TouchableOpacity>
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
    <View style={styles.spacer}></View>
    <View style={styles.headerContainer}>
    <Image
        source={require('./assets/xhaw logo.png')} //logo and header title
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Empowering The Nation</Text>
    </View>
   <View style={styles.coursesspacer}></View>
    <Text style={styles.sumText}>Six-Month Courses</Text>
    
<View style={styles.spacer}></View>
    <View style={styles.headerContainer}>
      
  <Image
        source={require('./assets/first aid.png')} //logo and header title
        style={styles.firstaidlogo}
        resizeMode="contain"
      />
      
      <TouchableOpacity style = {styles.aidText} onPress={()=> navigation.navigate('First-Aid')}>
      <Text style={styles.aidText}>First-Aid</Text>
      </TouchableOpacity>
      
      <View style={styles.spacer}>
      </View>
</View>

      <View style={styles.headerContainer}>
  <Image
        source={require('./assets/sewing.png')} //logo and header title
        style={styles.sewinglogo}
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
        style={styles.lanscapinglogo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.aidText} onPress={()=> navigation.navigate('Landscaping')}>
      <Text style={styles.sewtext}>Landscaping</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
  <Image
        source={require('./assets/life skills.png')} //logo and header title
        style={styles.lifeskillslogo}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.aidText} onPress={()=> navigation.navigate('Life-Skills')}>
      <Text style={styles.sewtext}>Life Skills</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.coursesspacer}></View>
    <Text style={styles.distext}> Discount Summary</Text>
    <View style={styles.coursesspacer}></View>
    <View style={styles.discountImage}> {/*image that displays discount*/}
  <Image style={styles.discountImage}
        source={require('./assets/discountsum.png')} //logo and header title
       
      />
      </View>
</View>
);
};






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
     <View style={styles.spacer}></View>
      <Text style={styles.sumText}>Six-Week Courses</Text>
      <View style={styles.spacer}></View>
    
      <View style={styles.headerContainer}>
    <Image
          source={require('./assets/child minding.png')} //logo and header title
          style={styles.childmindinglogo}
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
          style={styles.cookinglogo}
          resizeMode="contain"
        />
        <Text style={styles.sewtext}>Cooking</Text>
        </View>
        <View style={styles.headerContainer}>
    <Image
          source={require('./assets/garden maintenance.png')} //logo and header title
          style={styles.gardenmaintenancelogo}
          resizeMode="contain"
        />
        <Text style={styles.sewtext}>Garden Maintenance</Text>
        </View>
   
        
       
      <Text style={styles.distext}> Discount Summary</Text>
      <View style={styles.spacer}>
      </View>
      <View style={styles.discountImage}>
    <Image style={styles.discountImage}
          source={require('./assets/discountsum.png')} //logo and header title
         
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
        style={styles.firstaidlogo}
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
<Button title="Select Courses" color='#F8A72A' onPress={()=> navigation.navigate('Select Courses')}/>
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
        style={styles.sewinglogo}
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
<Button title="Select Courses" color='#F8A72A' onPress={()=> navigation.navigate('Select Courses')}/>
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
        style={styles.lanscapinglogo}
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
<Button title="Select Courses" color='#F8A72A' onPress={()=> navigation.navigate('Select Courses')}/>
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
        style={styles.lifeskillslogo}
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
<Button title="Select Courses" color='#F8A72A' onPress={()=> navigation.navigate('Select Courses')}/>
<Button title="HomePage" color='#F8A72A' onPress={()=> navigation.navigate('HomePage')}/>
    </View>
    </View>
  );
};


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
        source={require('./assets/child minding.png')} //logo and header title
        style={styles.childmindinglogo}
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
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R750</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.ChildMindingButtoncontainer}>
<Button title="Select Courses" color='#F8A72A' onPress={()=> navigation.navigate('Select Courses')}/>
<Button title="View Next" color='#F8A72A' onPress={()=> navigation.navigate('Cooking')}/>
    </View>
    </View>
  );
};
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
        style={styles.cookinglogo}
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
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R750</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.cookingButtoncontainer}>
<Button title="Select Courses" color='#F8A72A' onPress={()=> navigation.navigate('Select Courses')}/>
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
      
      <View style={styles.headerContainer}>
      <Image
        source={require('./assets/garden maintenance.png')} //logo and header title
        style={styles.gardenmaintenancelogo}
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
<Text style={{color:'black',fontWeight:'bold',fontSize:25, fontFamily:'sans-serif'}}>Course:R750</Text>

</View>
<View style={styles.spacer}></View>
<View style={styles.GardenMaintenanceButtoncontainer}>
<Button title="HomePage" color='#F8A72A' onPress={()=> navigation.navigate('HomePage')}/>
<Button title="Select Courses" color='#F8A72A' onPress={()=> navigation.navigate('Select Courses')}/>
    </View>
    </View>
  );
};

function SelectCourse({navigation}){
  const [Name, setName]= useState('');
  const [Email,setEmail]=useState('');
  const [Number, setNumber]=useState('');
  const [selectCourse, setSelectedCourse]=useState<string[]>([]);
  const [Message, setMessage]= useState('');

  const courses = [
    { id: '1', name: 'First-Aid', price: 1500 },
    { id: '2', name: 'Sewing', price:1500 },
    { id: '3', name: 'Landscaping' , price:1500 },   //function for courses in terms of calculating averages
    { id: '4', name: 'Life-Skills', price: 1500 },
    { id: '5', name: 'Child Minding' , price:750 },
    { id: '6', name: 'Cooking', price:750 },
    { id: '7', name: 'Garden Maintenance', price:750 },
  ];


  const toggleCourse = (id: string) => {
    setSelectedCourse((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleRegister = () => {
    const selected = courses.filter(courses => selectCourse.includes(courses.id)); //routing infor from Select Courses to Calculate fees page
    navigation.navigate('Calculate Fees', {  selectCourse: selected });
  };

  const handleAddInfo = () => {
    if (Name && Email && Number) {
      // Normally you'd save the data here
      setMessage('Info added ✅');

      // Optional: clear inputs after adding
      setName('');
      setEmail('');
      setNumber('');
    } else {
      setMessage('Please fill out all fields');
    }
  };



  return(
    <View style={styles.CalculateFeescontainer}>
      <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
          
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <Text style={{fontSize:20, fontWeight:'bold', fontFamily:'serif'}}>Please enter your details:</Text>
      <View style={styles.Detailsbox}>
      <TextInput
            style={styles.InputBoxs}
            placeholder="Enter Name"
            value={Name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.InputBoxs}
            placeholder="Enter Email"
            value={Email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.InputBoxs}
            placeholder="Enter Cellphone Number"
            value={Number}
            onChangeText={setNumber}
            keyboardType="numeric"
          />
          <Button title="Submit Info" color="#FA872A" onPress={handleAddInfo}  /> {/*when button is clicked thefunction of handling the info is executed*/}

          {Message !== '' && <Text style={styles.Message}>{Message}</Text>} {/*A display message that handles error*/}
          </View>
          
          <View style={styles.spacer}></View>

    <Text style={{fontSize:20, fontWeight:'bold', fontFamily:'serif'}}>Select Courses:</Text>

    <FlatList 
         data={courses}
         keyExtractor={(item) => item.id}  
         renderItem={({ item }) => {
           const isSelected = selectCourse.includes(item.id);
           return (
          
          <TouchableOpacity
          style={[styles.CourseItem, isSelected && styles.SelectedItem]}
          onPress={() => toggleCourse(item.id)}
        >
            <Text>{item.name} (R{item.price})</Text>
          </TouchableOpacity>
        )
  }}
      />
       <Text style={{color:'black', fontFamily:'sans-serif', fontWeight:'bold', fontSize:15}}>
        Selected: {selectCourse.map((id) => courses.find(c => c.id === id)?.name).join(', ')}
      </Text>
      <View style={styles.coursesspacer}></View>
    <Button title="Submit" color="#FA872A" onPress={handleRegister}  />   {/*routes navigation of screens*/}
   
</View>

          
    
  );
};


interface RouteParams {
  selectCourse: { id: string; name: string; price: number }[]; }
   {/**function that sends info to the calculate page screen */}


function CalculateFees({ navigation, route}: { route: { params: RouteParams } }){
  const selectCourse = route?.params?.selectCourse?.filter(
    (courses) => courses && !isNaN(Number(courses.price))
  ) ??  [];  {/*this allows the select course and its price to be displayed on the screen from the previous screen*/} 





 
  
//total price of course
  let total: number = 0;
for (const courses of selectCourse) {
  total += Number(courses.price);
}

  // Calculate discount based on number of selected courses
  let discountRate = 0;
  if (selectCourse.length === 2) {
    discountRate = 0.05;
  } else if (selectCourse.length === 3) {
    discountRate = 0.10;
  } else if (selectCourse.length > 3) {
    discountRate = 0.15;
  }

  const discount = discountRate * total;
  const finalTotal = total - discount;  //calculation for for the courses

  return (
    <View style={styles.CalculateFeescontainer}>
      <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
          
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <View style={styles.mainPicture}>
      <Image style={styles.imageSize}
        source={require('./assets/fees.png')}/>
      </View>
      <View style={styles.spacer}></View>
      <Text style={styles.title}>Calculate fees:</Text>
      
      <View style={styles.spacer}></View>

      
      <Text style={{fontFamily:'sans-serif', fontSize:25, fontWeight:'bold'}}>Courses Selected: {selectCourse.map(c => c.name).join(', ')} </Text>
      
      <View style={styles.spacer}></View>
      <View style={styles.FirstAidbox}>
      {selectCourse.map((course: any, index: number) => (
        <Text key={index}>• {course.name} - R{Number(course.price)}</Text>
        
      ))}
      </View>
      <View style={styles.spacer}></View>
      
      <Text style={{fontFamily:'sans-serif', fontSize:25, fontWeight:'bold'}}>Total: R{total.toFixed(2)}</Text>
      {discount > 0 && (
        <Text style={styles.distext}>
          Discount ({(discountRate * 100).toFixed(0)}%): -R{discount.toFixed(2)}
        </Text>
      )}
      
      <Text style={{fontFamily:'sans-serif', fontSize:25, fontWeight:'bold'}}>Amount to Pay: R{finalTotal.toFixed(2)}</Text>
      <View style={styles.spacer}></View>
      <View style={styles.cookingButtoncontainer}>
<Button title="Contact Us" color='#F8A72A' onPress={()=> navigation.navigate('Contact Us')}/>
<Button title="HomePage" color='#F8A72A' onPress={()=> navigation.navigate('HomePage')}/>
  <Button title="Finish" color='#F8A72A' onPress={()=> navigation.navigate('Thank You')}/>
    </View>
    </View>
    
  );
}


function Contact({navigation}){
 return(
  <View style={styles.ContactUscontainer}>
    <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
          
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      
    
      <View style={styles.headerContainer}>
    <Image
          source={require('./assets/contact us.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
          
        />
          <Text style={{fontSize:25, fontWeight:'bold',fontFamily:'serif'}}>Get in touch</Text>
        </View>
        
        

      <View style={styles.FirstAidbox}> {/*box that contains info for contact details for the institution*/}
        <Text style={{fontWeight:'bold', fontSize:20, fontFamily:'sans-serif'}}>Phone number:+27 11 123 4567</Text>
        <Text style={{fontWeight:'bold', fontSize:20, fontFamily:'sans-serif'}}>Email:info@empoweringthenation.co.za</Text>
      
      </View>
      <View style={styles.spacer}></View>
      <Text style={{fontWeight:'bold', fontSize:25, fontFamily:'serif'}}>Our Venues in Johannesburg:</Text>
      <View style={styles.spacer}></View>
      <Text style={{fontWeight:'bold', fontSize:20, fontFamily:'sans-serif'}}>Venue 1-Sandton</Text>
      <Text style={{fontWeight:'bold', fontSize:20, fontFamily:'sans-serif'}}>125 Fouriesburg Street,Amberfield Glen, Johannesburg</Text>

      <MapView 
        style={styles.map}
        initialRegion={{
          latitude:  -25.87475,
          longitude:  28.13108,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: -25.87475, longitude: 28.13108 }}
          title="Empowering the Nation Sandton"
        />
      </MapView>
      <Text style={{fontWeight:'bold', fontSize:20, fontFamily:'sans-serif'}}>Venue 2-Soweto</Text>
      <Text style={{fontWeight:'bold', fontSize:20, fontFamily:'sans-serif'}}>456 Growth Avenue, Soweto, Johannesburg</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude:  -26.266111,
          longitude:  27.865833,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: -26.266111, longitude: 27.865833 }} 
          title="Empowering the Nation Soweto"
        /> {/*shows locations of the institution*/}
      </MapView>


      <Text style={{fontWeight:'bold', fontSize:20, fontFamily:'sans-serif'}}>Venue 3-Midrand</Text>
      <Text style={{fontWeight:'bold', fontSize:20, fontFamily:'sans-serif'}}>789 Prosperity Road, Midrand, Johannesburg</Text> {/*Physical addresses of the locations of the institutions*/}

      <MapView
        style={styles.map}
        initialRegion={{
          latitude:  -26.266111,
          longitude:  27.865833,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      > {/*coordinates of loaction of institutions*/}
        <Marker
          coordinate={{ latitude: -26.266111, longitude: 27.865833 }}
          title="Empowering the Nation Soweto"
        />
      </MapView>
      <View style={styles.contactUsButtoncontainer}>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('HomePage')}>
    <Text style={styles.buttonText}>HOMEPAGE</Text>
  </TouchableOpacity>
    </View>
      </View>
      
      



  
 )
}



function ThankYou({navigation}){
return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
    <Image
          source={require('./assets/xhaw logo.png')} //logo and header title
          style={styles.logo}
          resizeMode="contain"
          
        />
        <Text style={styles.title}>Empowering The Nation</Text>
      
      </View>
      <View style={styles.spacer}>

      </View>
      <View style={styles.spacer}></View>
        <View style={styles.mainPicture}>
      <Image style={styles.imageSize}
        source={require('./assets/thank you.png')}/>
      </View>
      <View style={styles.spacer}></View>
      <Text style={styles.monthText}>Thank You for registering with us!</Text>
      <Text style={styles.viewText}>We will be in touch shortly</Text>

<View style={styles.spacer}></View>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('HomePage')}>
    <Text style={styles.buttonText}>Homepage</Text>
    </TouchableOpacity>
      
      
     
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3871C1',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  SixMonthcontainer: {
    flex: 1,
    backgroundColor: '#65A4CF',  //containers were made for each courses offered to have different colours
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
    borderColor:'#000',
    borderWidth: 2
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
  fontSize: 30,
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
  fontSize: 30,
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
},
discountImage:{
  width: 500,
  height: 300,
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
  justifyContent:'center',   //box to display first aid info
  alignItems: 'center',
  textAlign:'center',
  borderColor:'#000',
  borderWidth:2
},

Buttoncontainer: {
  flexDirection: 'row',
  backgroundColor: '#3970C0',
  justifyContent:'space-between',
  gap:10


},
SewingButtoncontainer: {
  flexDirection: 'row',
  backgroundColor: '#65A4CF',  //containers were made so that 2 buttons can be spaced next to one another 
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
  gap:10,
  overflow: 'hidden', // Prevents anything from sticking out


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
  overflow: 'hidden', // blocks background leaks
  


},
GardenMaintenanceButtoncontainer: {
  flexDirection: 'row',
  backgroundColor:  '#3970C0',
  justifyContent:'space-between',
  gap:10


},
GardenMaintenancecontainer: {
  flex:1,
  backgroundColor:  '#3970C0',
  justifyContent:'center',
  alignItems: 'center',
  


},
ContactUscontainer: {
  flex:1,
  backgroundColor:  '#3871C1',
  justifyContent:'center',
  alignItems: 'center',
  


},
contactUsButtoncontainer: {
  flexDirection: 'row',
  backgroundColor:  '#3871C1',
  justifyContent:'space-between',
  gap:10
},


CalculateFeescontainer: {
  flex:1,
  backgroundColor:  '#4FAFEB',
  justifyContent:'center',
  alignItems: 'center',
  },
InputBoxs:{
  flexDirection: 'row',
  marginTop: 10,
  justifyContent: 'flex-start',
  alignItems:'center',
fontSize: 15,
borderColor: '#ccc',
  borderWidth: 1,
  paddingHorizontal: 10,
  borderRadius: 8,
  marginBottom: 10,
  backgroundColor:'#fff'
},

SelectedItem: {
  backgroundColor: '#fcfd95', //colour appears when user selects a course on the select courses screen
},
CourseItem: {
  padding: 12,
  marginVertical: 6,
  backgroundColor: '#eee', //styling for the flatlist of courses
  borderRadius: 8,
 alignItems:'center',
},
Detailsbox:{
  width:280,
  height:280,
  backgroundColor:'#111e3e',  //styling for the box that contains the text input boxes for user to fill out
  justifyContent:'center',
  alignItems: 'center',
  textAlign:'center',
  borderColor:'#'
},
feesImage:{
  width: 200,  //styling for image displayed on the calculate fees page 
  height: 200,
},
imageSize:{
  width: 300,
  height: 150,
},

mainPicture:{
  paddingTop: 40,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'beige'

},
map: {
  height: 100,      //styling for the maps of the institution
  width: 300,
    marginBottom: 10,
    borderRadius: 10,
},
firstaidlogo: {
  width: 120,      // Set desired width
  height: 60,      // Set desired height
  // optional: add margins or alignment if needed
  // marginTop: 10,
  // alignSelf: 'center',
},
sewinglogo: {
  width: 120,      // Set desired width
  height: 80,      // Set desired height
  // optional: add margins or alignment if needed
  // marginTop: 10,
  // alignSelf: 'center',
},
lifeskillslogo: {
  width: 120,      // Set desired width
  height: 80,      // Set desired height
  // optional: add margins or alignment if needed
  // marginTop: 10,
  // alignSelf: 'center',
},
gardenmaintenancelogo: {
  width: 120,      // Set desired width
  height: 80,      // Set desired height
  // optional: add margins or alignment if needed
  // marginTop: 10,
  // alignSelf: 'center',
},
lanscapinglogo: {
  width: 120,      // Set desired width
  height: 80,      // Set desired height
  // optional: add margins or alignment if needed
  // marginTop: 10,
  // alignSelf: 'center',
},
cookinglogo: {
  width: 120,      // Set desired width
  height: 80,      // Set desired height
  // optional: add margins or alignment if needed
  // marginTop: 10,
  // alignSelf: 'center',
},
childmindinglogo: {
  width: 120,      // Set desired width
  height: 80,      // Set desired height
  // optional: add margins or alignment if needed
  // marginTop: 10,
  // alignSelf: 'center',
},
viewDiscounts:{

},
linkText: {
  color: 'blue',
  textDecorationLine: 'underline',
  // subtle opacity change on press (tap)
},
button: {
  backgroundColor: '#F4A72B',
  paddingVertical: 16,
  paddingHorizontal: 32,
  borderRadius: 40, // <- makes it rounded
  alignItems: 'center',
  borderColor: '#000', // Match container if needed
  borderWidth: 2,

  
},
buttonText: {   //BUTTON STYLING
  color: '#fff',
  fontWeight: 'bold',
},
coursesspacer:{
  height: 20, // this will create space between components
},
Message: {
  marginTop: 20,   //styling for display message when filling out form
  fontSize: 16,
  color: 'green',
  textAlign: 'center',
},
});
