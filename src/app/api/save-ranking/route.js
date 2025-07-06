import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Body recebido:', body);

    const incomingmoney = Number(body.money);

    if (!body.name || isNaN(incomingmoney)) {
      return new Response(JSON.stringify({ error: 'Dados inválidos' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const filePath = path.join(process.cwd(), 'data', 'ranking.json');

    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '[]');
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(fileContent);

    const index = json.findIndex((entry) => entry.name === body.name);

    if (index !== -1) {
      const currentmoney = Number(json[index].money);

      if (incomingmoney > currentmoney) {
        json[index].money = incomingmoney;
      }
    } else {
      json.push({ name: body.name, money: incomingmoney });
    }

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2));

    return new Response(JSON.stringify({ message: 'Ranking atualizado com sucesso!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erro ao salvar ranking:', error);
    return new Response(JSON.stringify({ error: 'Erro interno' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
