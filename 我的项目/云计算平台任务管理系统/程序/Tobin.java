class ToBin
{
	public static void main(String[] args)
	{
		toBin(6);
	}
	/*
	十进制->二进制
	*/
	public static void toBin(int num)
	{
		StringBuffer sb = new StringBuffer();//一个装数据的容器，此处使用是为了调用其的反转功能。

		while(num>0)
		{
			//System.out.println(num%2);
			sb.append(num%2); //sb容器的添加(append)数据方法,将计算得到的值放入sb中
			num = num / 2;
		}
		 System.out.println(sb.reverse());//调用sb的反转功能。使存储的数据反向输出，即我们想要的二进制数
	}
}