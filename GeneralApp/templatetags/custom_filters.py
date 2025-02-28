from django import template

register = template.Library()

@register.filter
def intdiv(value, divisor):
    return value // divisor 