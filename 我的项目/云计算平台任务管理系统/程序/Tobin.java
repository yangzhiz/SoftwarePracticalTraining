class ToBin
{
	public static void main(String[] args)
	{
		toBin(6);
	}
	/*
	ʮ����->������
	*/
	public static void toBin(int num)
	{
		StringBuffer sb = new StringBuffer();//һ��װ���ݵ��������˴�ʹ����Ϊ�˵�����ķ�ת���ܡ�

		while(num>0)
		{
			//System.out.println(num%2);
			sb.append(num%2); //sb���������(append)���ݷ���,������õ���ֵ����sb��
			num = num / 2;
		}
		 System.out.println(sb.reverse());//����sb�ķ�ת���ܡ�ʹ�洢�����ݷ����������������Ҫ�Ķ�������
	}
}