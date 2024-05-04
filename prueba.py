# 1.- Como creamos una lista vacía?
list_ifts = []

# Imprimimos la lista vacía
# print(list_ifts)

# 2.- Como agregamos elementos a una lista?
list_ifts += [0]

# Imprimimos la lista con un elemento agregado
# print(list_ifts)

# 3.- Como podemos utilizar el bucle for para agregar más elementos?
for i in range(5):
    num = i + 1
    # Insertamos elementos en la lista en posiciones específicas
    list_ifts.insert(num, num)

# Imprimimos la lista con elementos agregados usando un bucle for
# print(list_ifts)

# 4.- Como podemos eliminar un elemento de la lista?
# Eliminamos el último elemento de la lista
del list_ifts[-1]
# print(list_ifts)

# 5.- Como podemos agregar un elemento al principio de la lista?
# Insertamos un elemento al principio de la lista
list_ifts.insert(0, -1)
# print(list_ifts)

# 6.- Ahora imprimí por consola la longitud de la lista.
# Calculamos y mostramos la longitud de la lista
orden = len(list_ifts)
# print(orden)




# -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Supongamos que tienen una lista que contiene las calificaciones de un grupo de estudiantes en un examen. Cada calificación es un número entero entre 0 y 100, donde 0 representa la calificación más baja y 100 la más alta. Tu tarea es escribir un programa que realice las siguientes acciones:


#     Crea una lista llamada calificaciones que contenga las siguientes calificaciones: 85, 92, 78, 90, 89, 95, 87, 80, 82, 100.
list_nota = [85, 92, 78, 90, 89, 95, 87, 80, 82, 100]

calificaciones_total = 0
numero_alumnos = 0


for i in list_nota:
    numero_alumnos += 1
    calificaciones_total += i 

print(calificaciones_total)
print(numero_alumnos)

promedio = round(calificaciones_total / numero_alumnos)

nota_alta = max(list_nota)
print(nota_alta)

nota_baja = min(list_nota)
print(nota_baja)


list_nota.sort()
print(list_nota)

print("Calificaciones ordenadas:", list_nota)
print("Promedio de calificaciones:", promedio)
print("Nota más alta:", nota_alta)
print("Nota más baja:", nota_baja)



#     Ordena la lista de calificaciones de forma ascendente y muestre la lista ordenada.
# def bubble_sort(calificaciones):
#     n = len(calificaciones)
#     for i in range(n):
#         for j in range(0, n-i-1):
#             if calificaciones[j] > calificaciones[j+1]:
#                 calificaciones[j], calificaciones[j+1] = calificaciones[j+1], calificaciones[j]

# bubble_sort(list_nota)  # Ordena la lista usando el algoritmo de ordenamiento burbuja

