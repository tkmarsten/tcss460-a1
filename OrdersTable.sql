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

--Remove the user test1
DELETE FROM Members 
WHERE Email='test1@test.com';

--Add the User test1  (password is: test12345)
INSERT INTO 
    Members(FirstName, LastName, Username, Email, Password, Salt)
VALUES
    ('test1First', 'test1Last', 'test1', 'test1@test.com', 'aafc93bbad0671a0531fa95168c4691be3a0d5e033c33a7b8be9941d2702e566', '5a3d1d9d0bda1e4855576fe486c3a188e14a3f1a381ea938cacdb8c799a3205f');