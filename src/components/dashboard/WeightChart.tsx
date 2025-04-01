
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

// Datos simulados para el gráfico de peso
const weightData = [
  { name: '0-3m', pesoPromedio: 120, objetivo: 150 },
  { name: '3-6m', pesoPromedio: 210, objetivo: 230 },
  { name: '6-9m', pesoPromedio: 300, objetivo: 320 },
  { name: '9-12m', pesoPromedio: 380, objetivo: 390 },
  { name: '12-15m', pesoPromedio: 440, objetivo: 450 },
  { name: '15-18m', pesoPromedio: 490, objetivo: 500 },
  { name: '18-24m', pesoPromedio: 550, objetivo: 560 },
  { name: '+24m', pesoPromedio: 580, objetivo: 620 },
];

// Componente para el tooltip personalizado
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const isAboveTarget = payload[0].value >= payload[1].value;
    
    return (
      <div className="bg-background p-3 rounded-md shadow-lg border">
        <p className="font-semibold">{`Edad: ${label}`}</p>
        <p className="text-primary">{`Peso promedio: ${payload[0].value} kg`}</p>
        <p className="text-muted-foreground">{`Peso objetivo: ${payload[1].value} kg`}</p>
        <div className={`text-xs mt-1 ${isAboveTarget ? 'text-success' : 'text-destructive'}`}>
          {isAboveTarget 
            ? `+${(payload[0].value - payload[1].value)} kg sobre el objetivo` 
            : `-${(payload[1].value - payload[0].value)} kg bajo el objetivo`}
        </div>
      </div>
    );
  }

  return null;
};

export default function WeightChart() {
  return (
    <Card className="col-span-12 lg:col-span-4">
      <CardHeader>
        <CardTitle>Evolución de Peso</CardTitle>
        <CardDescription>Peso promedio vs objetivo por edad</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weightData}
              margin={{
                top: 10,
                right: 10,
                left: 10,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#888" fontSize={12} tickMargin={10} />
              <YAxis stroke="#888" fontSize={12} tickFormatter={(value) => `${value}kg`} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="pesoPromedio" name="Peso promedio" fill="#6E59A5" radius={[4, 4, 0, 0]} />
              <ReferenceLine stroke="none" />
              <Bar dataKey="objetivo" name="Objetivo" fill="#6E59A520" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
