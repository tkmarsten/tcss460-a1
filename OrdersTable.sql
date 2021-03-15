CREATE TYPE SIZE AS ENUM ('small', 'medium', 'large');

CREATE TYPE BASE AS ENUM ('white', 'brown', 'noodles');

CREATE TYPE PROTEIN AS ENUM ('tuna', 'salmon', 'octopus', 'tofu');

DROP TABLE IF EXISTS Orders CASCADE;
CREATE TABLE Orders (OrderID SERIAL PRIMARY KEY,
                    MemberID INT,
                    My_Size SIZE,
                    My_Base BASE,
                    My_Protein PROTEIN,
                    Option1 BOOLEAN,
                    Option2 BOOLEAN,
                    Option3 BOOLEAN,
                    Option4 BOOLEAN,
                    Option5 BOOLEAN,
                    Option6 BOOLEAN,
                    Option7 BOOLEAN,
                    Option8 BOOLEAN,
                    Option9 BOOLEAN,
                    Option10 BOOLEAN,
                    Option11 BOOLEAN,
                    Option12 BOOLEAN,
                    FOREIGN KEY(MemberID) REFERENCES Members(MemberID)
);