import matplotlib.pyplot as plt

#x = [1,2,3,4, 5]
#y = [2,3,5,7,11]

#plt.plot(x, y, marker='o', linestyle='-', color='b', label='Data Line')
#plt.scatter(x, y, color='r', marker='x', s=100, label='Data Points')
#plt.xlabel('X-axis label')
#plt.ylabel('Y-axis label')
#plt.title('Simple Line Plot')


#categories = ['A', 'B', 'C', 'D']
#values = [10, 20, 15, 25]

#plt.bar(categories, values, color='g', alpha=0.7, label='Bar Values')
#plt.xlabel('Categories')
#plt.ylabel('Values')
#plt.title('Bar Chart')
#data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]

#plt.hist(data, bins=5, color='c', edgecolor='black')
#plt.xlabel('Bins')
#plt.ylabel('Frequency')
#plt.title('Histogram')

#plt.legend()
#plt.grid(True)

#sizes = [20, 30, 10, 40]
#labels = ['A', 'B', 'C', 'D']

#plt.pie(sizes, labels=labels, autopct='%1.1f%%', colors=['gold', 'yellowgreen', 'lightcoral', 'lightskyblue'])
#plt.title('Pie Chart')


#fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

#ax1.plot([1, 2, 3], [4, 5, 6], 'r-')
#ax1.set_title('Subplot 1')

#ax2.bar(['A', 'B', 'C'], [3, 7, 2], color='b')
#ax2.set_title('Subplot 2')

#plt.tight_layout()

from mpl_toolkits.mplot3d import Axes3D
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
x, y = np.meshgrid(x, y)
z = np.sin(np.sqrt(x**2 + y**2))

ax.plot_surface(x, y, z, cmap='viridis')

plt.title('3D Surface Plot')
plt.show()

