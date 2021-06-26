import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from './styles';

export function Home(){
    const [valI, setValI] = useState('0');
    const [valF, setValF] = useState('0');
    const [valPV, setValPV] = useState('0');
    const [valmA, setValmA] = useState(0);
    const [valPorc, setValPorc] = useState(0);
    const [valAITRT, setValAITRT] = useState(0);

    function calculaPV(I, F, PV){
        if((Number(I) === 0 && Number(F) === 0) || Number(F) < Number(I)){
          setValPV(0);
          setValAITRT(0);
          setValPorc(0);
          return;
        }
    
        if(PV === 0 && F !== 0){
          setValAITRT(0);
          setValPorc(0);
          return;
        }
    
        let resultmA = (16*(Number(PV) - Number(I)) / (Number(F) - Number(I))) + 4;
        let resultPorc = ((resultmA - 4)*100)/16;
        let resultAITRT = ((resultmA - 4)*28479)/16;

        // console.log(resultmA + " " + I + " " + F + " " + PV)
    
        setValmA(resultmA.toFixed(2));
        setValPorc(resultPorc.toFixed(2));
        setValAITRT(resultAITRT.toFixed(0));
      }
    

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Conversor mA
            </Text>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Valor em percentual:</Text>
                    <Text style={styles.infoValue}>{valPorc} %</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Valor em corrente:</Text>
                    <Text style={styles.infoValue}>{valmA} mA</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoTitle}>Valor AITRT:</Text>
                    <Text style={styles.infoValue}>{valAITRT}</Text>
                </View>
            </View>
            <Text style={styles.infoValue}>Entre com a faixa da U.E.:</Text>
            <View style={styles.inicialValuesContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.infoTitle}>INICIAL</Text>
                    <TextInput 
                        placeholder="Valor inicial" 
                        style={styles.input} 
                        value={valI.toString()}
                        keyboardType="numeric"
                        onChangeText={(radius) => { 
                            setValI(radius); 
                            calculaPV(radius, valF, valPV)
                        }}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.infoTitle}>FINAL</Text>
                    <TextInput 
                        placeholder="Valor final" 
                        style={styles.input} 
                        keyboardType="numeric"
                        value={valF.toString()}
                        onChangeText={(radius)  => { 
                            setValF(radius); 
                            calculaPV(valI, radius, valPV)
                        }}
                    />
                </View>
            </View>
            <View style={styles.sliderContainer}>
                <Text style={styles.infoTitle}>PV = </Text>

                <TextInput 
                    value={valPV.toString()} 
                    placeholder="Valor do PV" 
                    style={styles.input} 
                    keyboardType="numeric"
                    onChangeText={(radius)  => { 
                        setValPV(radius); 
                        calculaPV(valI, valF, radius)
                    }}
                />   
            </View>
            

            <Text>Created by André Oliveira Cunha</Text>
        </View>
    )
}