# EcoAdmin - Gerenciamento de Coleta Sustentável de Resíduos Eletrônicos.

Repositório referente ao projeto do quarto semestre da PUC Minas EAD - Sistemas de Informação: Aplicações de sustentabilidade.

# Links

O site está hospedado no site [render](https://render.com), com a base de dados (PostgresSQL) no site [Subapase](https://supabase.com).

O link para acessar o site https://ecoadmin-dashboard.onrender.com/

## Como rodar o projeto localmente

O projeto está separado por duas pastas, backend e frontend. Para rodar o frontend localmente, você precisa ter o node instalado e rodar os comandos: 

    npm install
    npm run dev
    
Para rodar o backend, você precisar ter o python e o postgres instalado/configurado em sua máquina. Para rodar o servidor, execute os seguintes comandos na pasta ./backend
	No windows:

    python -m venv env
    env/Scripts/activate.bat
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
	python manage.py runserver

No Linux/Mac

    python3 -m venv env
    source env/bin/activate
    pip install -r requirements.txt
    python manage.py makemigrations
    python manage.py migrate
	python manage.py runserver
