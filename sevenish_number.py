import unittest

def sevenish_number(n):
    # TODO
    #raise NotImplementedError
    pos = 1
    val = 0
    count = 0
    while n >= pos:
        if pos & n == pos:
            val += 7**count
        pos *= 2
        count += 1
    print(val)
    return val
            


#print(sevenish_number(3))
class SevennishNumberSpec(unittest.TestCase):
    def test_1st_term(self):
        # "0" => 7^0
        self.assertEqual(1, sevenish_number(1))

    def test_2nd_term(self):
        # "10" => 7^1
        self.assertEqual(7, sevenish_number(2))

    def test_3rd_term(self):
        # "11" => 7^1 + 7^0
        self.assertEqual(8, sevenish_number(3))

    def test_4th_term(self):
        # "100" => 7^2 
        self.assertEqual(49, sevenish_number(4))

    def test_5th_term(self):
        # "101" => 7^2 + 7^0 = 50
        self.assertEqual(50, sevenish_number(5))

    def test_6th_term(self):
        self.assertEqual(56, sevenish_number(6))

    def test_7th_term(self):
        self.assertEqual(57, sevenish_number(7))

    def test_8th_term(self):
        self.assertEqual(343, sevenish_number(8))

    def test_9th_term(self):
        self.assertEqual(344, sevenish_number(9))

    def test_10th_term(self):
        self.assertEqual(350, sevenish_number(10))


if __name__ == '__main__':
    unittest.main(exit=False, verbosity=2)
